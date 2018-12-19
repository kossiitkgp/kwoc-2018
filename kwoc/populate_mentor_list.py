#!/usr/bin/python
#-*- coding: utf-8 -*-

import os
import csv
import json

dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])

PROJECT_CSV = os.path.join(root_dir,'gh_scraper/projects.csv')
MENTORS_JSON = os.path.join(root_dir,'gh_scraper/list_of_mentors.json')

def main():
    mentors = []

    with open(PROJECT_CSV, 'r') as f:
        table = csv.reader(f)
        for row in table:
            mentors.append('{mentor} | {project}'.format(mentor=row[0], project=row[2]))

    with open(MENTORS_JSON, 'w') as f:
        mentors = mentors[1:]
        mentors = list(set(mentors))
        mentors.sort()
        json.dump(mentors, f)

if __name__ == '__main__':
    main()