import os
import time 

while True:
	print('A')
	os.system('python3 gh_scraper/stats/generate_statistics.py')
	time.sleep(3600)