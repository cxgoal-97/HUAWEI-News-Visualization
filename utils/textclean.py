#!/usr/bin/env python
# coding: utf-8

# In[1]:


import json
import os
import re
import numpy as np
from matplotlib import pyplot as plt
import seaborn as sns


# In[2]:


for file_name in os.listdir("./down/"):
    file_data = []
    with open("./down/"+file_name,"r", encoding="utf-8") as f:
        file_data=f.read()
        file_data=json.loads(file_data)
        for i in file_data:
            # 如果有展开全文，把展开全文部分删除
            if "展开全文c" in i["text"]:
                i["text"] = i['text'][i['text'].find("展开全文c")+5:i['text'].find("收起全文d")]
            # 删除空格
            i["text"] = i["text"].replace("\n", "")
            i["text"] = i["text"].replace(" ", "")
            # 赞转化为数字
            try:
                i["zan"] = int("0"+i["zan"].replace(" ",""))
            except:
                print("{} zan 不需要处理", i["zan"])
            # 转发转化为数字
            try:
                i["transmit"] = int("0"+re.findall(r"\d+",'0'+i['transmit'])[0])
            except:
                print("{} transmit 不需要处理", i["transmit"])
            # 评论数转化为数字
            try:
                i["comment"] = int("0"+re.findall(r"\d+", '0'+i["comment"])[0])
            except:
                print("{} comment 不需要处理", i['comment'])
    with open("./down/"+file_name, "w", encoding="utf-8") as f:
        file_data = json.dumps(file_data, ensure_ascii=False)
        f.write(file_data)
        f.close()
