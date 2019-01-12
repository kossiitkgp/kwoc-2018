import json

stats = {}

with open("../gh_scraper/stats/stats.json") as f:
    stats = json.load(f)

usernames_stats = []
for key in stats:
    usernames_stats.append(key.lower())

gh_login = {}

with open("../gh_login/gh_login_student.json") as f1:
    gh_login = json.load(f1)

# usernames_login
map_gh_lower_to_upper_case = {}
for key in gh_login:
    # usernames_login.append(key.lower())
    map_gh_lower_to_upper_case[key.lower()] = key

new_login = {}
for key in usernames_stats:
    if key in map_gh_lower_to_upper_case.keys():
        new_login[map_gh_lower_to_upper_case[key]] = gh_login[map_gh_lower_to_upper_case[key]]

with open("../gh_login/gh_login_student.json", "w") as f1:
    json.dump(new_login,f1,indent=4)