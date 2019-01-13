import json
import csv

data = {}
mentors_mails = []
students_gitlink = []
gitlinks = []
mappings = {}

with open("../projects.csv") as csv_fil:
    csv_read = csv.reader(csv_fil,delimiter=',')
    line_cnt = 0
    for row in csv_read:
        if line_cnt>0:
            mentors_mails.append(row[1])
        line_cnt +=1
print(len(mentors_mails))

gh_login_data = {}
with open("../../frozen/gh_login_student.json") as f:
    gh_login_data = json.load(f)

gh_login_keys_map_to_original_case = {}
for i in gh_login_data:
    orig = i
    gh_login_keys_map_to_original_case[i.lower()] = orig


new_stats = {}
with open("stats.json","r") as f:
    stats = json.load(f)
    for key in stats:
        if key not in gitlinks:
            new_stats[key] = stats[key]
# print(gh_login_keys_map_to_original_case['sai-adarsh'])
# # print(gh_login_keys_map_to_original_case)

i=0
for key in new_stats:
    if key.lower() in gh_login_keys_map_to_original_case.keys():
        # print(gh_login_keys_map_to_original_case[key])
        i+=1
    else:
        print(key)

print(len(new_stats))
print(i)
