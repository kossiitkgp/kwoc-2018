import os
import time 

script_path = '/'.join( ( os.path.dirname(os.path.realpath(__file__)) ).split('/')[:-1] ) + '/gh_scraper/stats/generate_statistics.py'
print(script_path)

while True:
	print('A')
	os.system('python3 ' + script_path)
	time.sleep(3600)