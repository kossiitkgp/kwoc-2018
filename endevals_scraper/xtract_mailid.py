import json
import csv

data = {}

with open("new_stats.json") as f:
    data = json.load(f)

keys = []
for key in data:
    keys.append(key)

mails = []

with open("../secrets/students.csv") as csv_fil:
    csv_read = csv.reader(csv_fil,delimiter=',')
    line_cnt = 0
    for row in csv_read:
        if line_cnt == 0:
            pass
        else:
            if row[2] in data.keys():
                mails.append(row[1])

        line_cnt +=1

print(len(mails))

with open("../kwoc/mail_ids.csv", "w") as f:
    len = 0
    for id in mails:
        if len!=0:
            f.write("\n")
        f.write(id)
        len+=1
