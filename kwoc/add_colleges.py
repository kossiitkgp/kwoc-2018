#!/usr/bin/python3
#-*- coding: utf-8 -*-

import json
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])

COLLEGES_INPUT = root_dir + '/gh_scraper/colleges_to_add.txt'
COLLEGES_JSON = root_dir + '/gh_scraper/colleges.json'

def main():
    with open(COLLEGES_INPUT, 'r+') as inp, open(COLLEGES_JSON, 'r+') as out:
        custom_colleges = list(filter(None, inp.read().splitlines()))
        colleges = json.load(out)
        i = len(colleges)

        for f in [inp, out]:
            f.seek(0)
            f.truncate()

        for j, college in enumerate(custom_colleges):
            colleges[i+j] = college

        json.dump(colleges, out, indent=4, separators=(',', ': '))

if __name__ == '__main__':
    main()