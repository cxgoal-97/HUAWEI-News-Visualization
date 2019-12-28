import os
import json
import time

from aip import AipNlp


# ### 注册百度IP

APP_ID = ""
API_KEY = ""
SECRET_KEY = ""


client = AipNlp(APP_ID, API_KEY, SECRET_KEY)


# 由于API的限制， 文本最大长度有限制
MAXLEN = 1000


# ###  完成18
# 

i = 0
for file_name in os.listdir("./down/"):
    file_data = []
    with open("./down/"+file_name,"r", encoding="utf-8") as f:
        file_data=f.read()
        file_data=json.loads(file_data)
        item_index = 0
        for one_item in file_data:
            ddd = client.sentimentClassify(one_item["text"].encode("gbk", "ignore").decode("gbk"))
            # 由于贫穷的限制，百度限制了并发，因此有可能我们的访问返回为error，因此检查
            while "error_code" in ddd:
                if ddd["error_code"] == 282131:
                    # 文本过长
                    ddd = client.sentimentClassify(one_item["text"].encode("gbk", "ignore").decode("gbk")[:MAXLEN])
                else:
                    print("信息{} 堵塞:{}".format(item_index, i))
                    i = i+1
                    time.sleep(2)
                    ddd = client.sentimentClassify(one_item["text"].encode("gbk", "ignore").decode("gbk"))
            one_item["sentiment"] = ddd["items"]
            item_index = item_index + 1
        f.close()
        print("{} 完成".format(file_name))
    with open("./down/"+file_name, "w", encoding="utf-8") as f:
        file_data = json.dumps(file_data, ensure_ascii=False)
        f.write(file_data)
        f.close()
