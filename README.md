# HUAWEI-News-Visualization
 PKU VIS 19Fall Group9

------

组长：黄港

组员：林殷年，范睿博，陈鑫

---



华为事件舆论可视化分工

| 任务                                                         | 人员 |
| ------------------------------------------------------------ | ---- |
| 按照时间的顺序的条状图的树图；可以自己定时间段，查看一段时间内的关键词词云 |      |
| 用微博数、点赞、评、转四个指标给用户排名，用户个数从高到低排作为横轴，纵轴为评论的个数（积极和消极区分颜色）(红黑榜 ) | 陈鑫 |
| 横轴时间，纵轴积极或消极，图中用卡通化的图，代表事件，点击事件图后能缩放 |      |
| 点击按钮（前五个热度），能在坐标轴中将纵轴数据改为对应的数据在原数据中的子集 |      |



### 其他idea
华为+事件+时间 搜索爬取

推特，百度的news，google，bing中外的情感对比（待测试）



---

### 依赖库及其版本

+ Bootstrap v4.3.1
+ d3 v5.14.2
+ jQuery v1.10.2



---

### 文档结构

|-- page	#网页部分

|&nbsp;&nbsp;|-- index.html

|&nbsp;&nbsp;|-- css

|&nbsp;&nbsp;|&nbsp;&nbsp;|-- bootsrap.css

|&nbsp;&nbsp;|-- data

|&nbsp;&nbsp;|&nbsp;&nbsp;|-- weibo_user_info.csv

|&nbsp;&nbsp;|-- js

|&nbsp;&nbsp;|&nbsp;&nbsp;|-- bubbleplot.js

|&nbsp;&nbsp;|&nbsp;&nbsp;|-- utils.js

|&nbsp;&nbsp;|-- lib

|&nbsp;&nbsp;|&nbsp;&nbsp;|-- bootsrap.js

|&nbsp;&nbsp;|&nbsp;&nbsp;|-- d3.js

|&nbsp;&nbsp;|&nbsp;&nbsp;|-- jquery_1.10.2.min.js

|-- utils

|&nbsp;&nbsp;|-- weibo

|&nbsp;&nbsp;|&nbsp;&nbsp;|-- weibospyder.py # 微博爬虫代码

|&nbsp;&nbsp;|-- sentiment.py # 情感分析代码

|&nbsp;&nbsp;|-- textclean.py # 文本处理代码，删除多余内容，将字符串形式的赞数，评论数，转发数转为数值型

