#!/usr/bin/python3
#-*- coding: utf-8 -*-

from bs4 import BeautifulSoup
import requests as r
import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])

COLLEGES_URL = 'https://www.4icu.org/in/indian-universities.htm'
OUTPUT_FILE = root_dir + '/gh_scraper/colleges.json'

def main():
    source = r.get(COLLEGES_URL).content
    soup = BeautifulSoup(source, 'lxml')
    tbody = soup.find_all('table')[0].find_all('tr')
    colleges = {}

    for i, tr in enumerate(tbody[1:-1]):
        college = tr.find('a').contents[0]
        if college:
            college = college.replace('/', '')

        colleges[i] = college

    with open(OUTPUT_FILE, 'w') as f:
        json.dump(colleges, f)

if __name__ == '__main__':
    main()