from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from urllib.parse import quote
from urllib.parse import unquote
from bs4 import BeautifulSoup

import time
import datetime
import json
import pandas as pd
import re
import argparse

class WeiboSpyder():
	def __init__(self, user, password, chrome_vis=True):
		self.vis = chrome_vis
		self.user = user
		self.password = password

		chrome_options = Options()
		if self.vis is False:
			chrome_options.add_argument('--headless')
		self.web = webdriver.Chrome(options=chrome_options, executable_path="./chromedriver_win32/chromedriver.exe") 
		time.sleep(3)
	
	def login(self):
		self.web.get('https://weibo.com/')
		self.web.set_window_size(1500,900)
		self.web.find_element_by_id('loginname').send_keys(self.user)
		time.sleep(1)
		self.web.find_element_by_name('password').send_keys(self.password)
		time.sleep(1)
		self.web.find_element_by_xpath("//div[@class='W_login_form']//div[6]//a[1]").click()
		time.sleep(5)
	
	def searchhot(self, keyword, start_time, end_time, maxpages=1, maxiterms=1000):
		res = []
		# 热门搜索是从1开始的
		for page_num in range(1,1+maxpages):
			try:
				self.web.get("https://s.weibo.com/weibo/"+quote(keyword)+"?timescope=custom:{}:{}".format(start_time, end_time)+"&page={}".format(page_num)+"&xsort=hot")
				time.sleep(5)
				# 展开全文
				try:
					for i in web.find_elements_by_partial_link_text("展开全文"):
						i.click()
						sleep(1)
				except:
					pass
				
				data = BeautifulSoup(self.web.page_source,features="html.parser")
				# 找到所有的信息
				main_info = data.find("div", class_="m-con-l").find_all("div", class_="card-wrap")
				for info_item in main_info:
					txt_info = ""
					person_info = ""
					time_info = ""
					transmit = ""
					comment = ""
					zan = ""
					
					# 读取个人信息
					person_info = info_item.find("a", class_="name").get("nick-name")
					# 读取文章信息
					for i in info_item.find_all("p", class_="txt"):
						txt_info = txt_info+i.text
					# 读取发表时间
					time_info = person_info + info_item.find("p", class_="from").text.replace("\n", "").replace(" ","")
					# 读取转发，评论，点赞
					try:
						tmp = info_item.find("div", class_="card-act").find_all("li")
						try:
							transmit = tmp[1].text
						except:
							print("{} 无转发".format(page_num))
						try:
							comment = tmp[2].text
						except:
							print("{} 无评论".format(page_num))
						try:
							zan = tmp[3].text
						except:
							print("{} 无点赞".format(page_num))
					except:
						print("{} 无转发，评论，点赞".format(page_num))
					res.append({"text":txt_info, "author":person_info, "time":time_info,\
								"transmit":transmit, "comment":comment, "zan":zan})
					if len(res) == maxiterms:
						print("关键词：{}, 起始时间：{}-终止时间：{}。 爬虫结束。".format(keyword, start_time, end_time))
						return res
			except:
				print("关键词：{}, 起始时间：{}-终止时间：{}。 爬虫异常。".format(keyword, start_time, end_time))
		print("关键词：{}, 起始时间：{}-终止时间：{}。 爬虫结束。".format(keyword, start_time, end_time))
		return res

	def saveinfo(self, info, path):
		with open(path, "wb+") as f:
			tmp = json.dumps(info, ensure_ascii=False)
			f.write(tmp.encode("utf-8"))
			f.close()
		time.sleep(3)
		print("成功保存")
