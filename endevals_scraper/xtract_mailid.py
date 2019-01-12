import json
import csv

data = {}

with open("new_stats.json") as f:
    data = json.load(f)

mails = []
alread_done = []
m = []
nn = []
count = 0
with open("../gh_login/student.csv") as csv_fil:
    csv_read = csv.reader(csv_fil,delimiter=',')
    line_cnt = 0
    print(len(mails))
    for row in csv_read:
        if line_cnt == 0:
            line_cnt +=1
            continue
        else:
            if row[2].lower() in data.keys():
                count +=1
                if row[2].lower() not in alread_done:# and row[]:
                    mails.append(row[1])
                    alread_done.append(row[2].lower())
                    nn.append(row[2].lower())
                else:
                    m.append(row)

        line_cnt +=1
        

# /for i in 
with open("../kwoc/mail_ids.csv", "w") as f:
    len = 0
    for id in mails:
        if len!=0:
            f.write("\n")
        f.write(id)
        len+=1

