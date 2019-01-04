#!/usr/bin/python
#-*- coding: utf-8 -*-

import os
import csv
import json
import hashlib

dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])

PROJECT_CSV = os.path.join(root_dir,'gh_scraper/projects.csv')
MENTORS_JSON = os.path.join(root_dir,'gh_scraper/list_of_mentors.json')
MENTORS_HASH_FILE = os.path.join(root_dir, 'secrets/mentor_unique_ids.json')

def main():
    mentors = []
    mentor_names = []
    with open(PROJECT_CSV, 'r', encoding='utf-8') as f:
        table = csv.reader(f)
        for row in table:
            mentors.append('{mentor} | {project}'.format(mentor=row[0], project=row[2]))
            if row[0] not in mentor_names:
                mentor_names.append(row[0])

    with open(MENTORS_JSON, 'w', encoding='utf-8') as f:
        mentors = mentors[1:]
        mentors = list(set(mentors))
        mentors.sort()
        json.dump(mentors, f)
    
    mentor_hash_dict = dict()
    mentor_names = mentor_names[1:]

    for name in mentor_names:
        key = hashlib.md5(name.encode('utf-8')).hexdigest()
        mentor_hash_dict[key] = name
        print(key, name)

    
    with open(MENTORS_HASH_FILE, 'w+', encoding='utf-8') as hash_file:
        json.dump(mentor_hash_dict, hash_file)
 
if __name__ == '__main__':
    main()