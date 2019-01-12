import hashlib
import csv
import json

mail_ids = []
mail_ids_to_gitlink = {}
dict_gitlink_to_hash = {}
hash_to_gitlink = {}


with open("../kwoc/mail_ids.csv") as f:
    csv_reader = csv.reader(f,delimiter=",")

    for row in csv_reader:
        mail_ids.append(row[0])

# print(mail_ids)

with open("students.csv") as f:
    csv_reader = csv.reader(f,delimiter=",")

    for row in csv_reader:
        mail = row[1]
        gitlink = row[2]
        if mail in mail_ids:

            hashed_key = hashlib.md5(gitlink.encode()).hexdigest()
            print(hashed_key)
            mail_ids_to_gitlink[mail] = gitlink
            dict_gitlink_to_hash[gitlink] = hashed_key
            hash_to_gitlink[hashed_key] = gitlink

with open("hashkey_to_gitlink.json","w") as f:
    json.dump(hash_to_gitlink,f,indent=4)

with open("gitlink_to_hashkey.json","w") as f:
    json.dump(dict_gitlink_to_hash,f,indent=4)

with open("mail_ids_to_gitlink.json","w") as f:
    json.dump(mail_ids_to_gitlink,f,indent=4)
