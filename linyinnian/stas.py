#encoding=utf-8
import os
import json
path = "E:\\visfinal\\down"
a = os.listdir(path)
authors = set()
aucount = {}
austats = {}
dayscount = [0 for i in range(330)]
poscount = [0 for i in range(330)]
triposcount = [[0,0,0] for i in range(330)]
negcount = [0 for i in range(330)]
negposcount = [[0,0,0] for i in range(330)]
midcount = [0 for i in range(330)]
midposcount = [[0,0,0] for i in range(330)]
date = []
i = 0
contentf = open("text.txt",encoding="utf-8",mode="w")
for f in a:
    date.append(f[3:-21])
    with open(path+"\\"+f,encoding="utf-8",mode="r") as fi:
        for line in fi:
            dd = json.loads(line)
            for d in dd:
                if not isinstance(d["comment"],int):
                    continue
                if not isinstance(d["transmit"],int):
                    continue
                if not isinstance(d["zan"],int):
                    continue

                contentf.write(d["text"]+'\n')

                if d["author"] in authors:
                    aucount[d["author"]][0] += 1
                else:
                    authors.add(d["author"])
                    aucount[d["author"]] = [1,0,0,0,0,0,0,0,0,0,0,0]
                
                aucount[d["author"]][1] += d["transmit"]
                aucount[d["author"]][2] += d["comment"]
                aucount[d["author"]][3] += d["zan"]

                dayscount[i] += 1
                if d["sentiment"][0]["sentiment"] == 2:
                    poscount[i] += 1
                    aucount[d["author"]][4] += 1
                    triposcount[i][0] += d["transmit"]
                    triposcount[i][1] += d["comment"]
                    triposcount[i][2] += d["zan"]
                    aucount[d["author"]][6] += d["transmit"]
                    aucount[d["author"]][7] += d["comment"]
                    aucount[d["author"]][8] += d["zan"]
                elif d["sentiment"][0]["sentiment"] == 0:
                    negcount[i] += 1
                    aucount[d["author"]][5] += 1
                    negposcount[i][0] += d["transmit"]
                    negposcount[i][1] += d["comment"]
                    negposcount[i][2] += d["zan"]
                    aucount[d["author"]][9] += d["transmit"]
                    aucount[d["author"]][10] += d["comment"]
                    aucount[d["author"]][11] += d["zan"]
                else:
                    midcount[i] += 1
                    midposcount[i][0] += d["transmit"]
                    midposcount[i][1] += d["comment"]
                    midposcount[i][2] += d["zan"]
    i+=1
'''
wf = open("stats2.csv",encoding="utf-8",mode="w")
for i in range(330):
    ar = [dayscount[i],poscount[i],negcount[i],midcount[i],triposcount[i][0],triposcount[i][1],triposcount[i][2],negposcount[i][0],negposcount[i][1],negposcount[i][2],midposcount[i][0],midposcount[i][1],midposcount[i][2]]
    l = ','.join([str(x) for x in ar])
    wf.write(date[i]+','+l+'\n')
'''
wf2 = open("aucount2.csv",encoding="utf-8",mode="w")
for d,v in aucount.items():
    wf2.write("%s,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d\n"%(d,v[0],v[1],v[2],v[3],v[4],v[5],v[6],v[7],v[8],v[9],v[10],v[11]))
