# -*- coding: utf-8 -*-
import collections
import csv
import sys
import os
import json
import requests
import ast
from flask import render_template, redirect, Markup, request, session,g
import markdown
from kwoc import config, oauth

sys.path.append("kwoc")

app, sess = config.create_app()
sess.init_app(app)


# Load stats.json file
dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])
stats_json = root_dir + '/gh_scraper/stats/stats.json'
with open(stats_json, 'r') as f:
    stats_dict = json.load(f)
# stats_dict = {}

# Separate people with non-zero contributions
non_zero_contributions = {}
zero_contributions = {}
for user, userdata in stats_dict.items():
    contribs = 0
    contribs += userdata['no_of_commits']
    contribs += userdata['pr_open']
    contribs += userdata['pr_closed']
    if contribs == 0:
        zero_contributions[user] = userdata
    else:
        non_zero_contributions[user] = userdata

non_zero_contributions = collections.OrderedDict(
    sorted(non_zero_contributions.items(), key=lambda t: t[1]['name']))
zero_contributions = collections.OrderedDict(
    sorted(zero_contributions.items(), key=lambda t: t[1]['name']))
non_zero_contributions.update(zero_contributions)

# Final data
stats_dict = non_zero_contributions


# Define routes
@app.route("/")
def main():
    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')
    return render_template('index.html')


@app.route("/stats")
def stats():
    # for key, value in stats_dict.items(): 
    #     print(key, value)
    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')

    return render_template('stats.html', stats=stats_dict, ghname=g.ghname)


@app.route('/stats/<git_handle>')
def user_stats(git_handle):
    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')

    git_handle = git_handle.lower()
    if git_handle in stats_dict:
        return render_template('profile.html', **stats_dict[git_handle])
    else:
        return redirect('/stats', code=302)


@app.route("/manuals")
def manuals():
    return render_template('manuals.html')


@app.route("/faq")
def faq():

    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')
    return render_template('faq.html')


@app.route("/testimonials")
def testimonials():

    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')

    return render_template('testimonials.html',ghname=g.ghname)


@app.route("/mentor_form")
def mentor_form():
    # return "Registrations have now been closed. See you next year !"
    return render_template('mentor_form.html')


@app.route("/student_form")
def student_form():
    # return "Registrations have now been closed. See you next year !"
    return render_template('student_form.html')


@app.route("/projects")
def projects():

    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')

    return render_template('projects.html',ghname=g.ghname)


@app.route("/profile")
def profile():

    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')
    return render_template('profile.html')


mentors_json = root_dir + '/gh_scraper/list_of_mentors.json'
with open(mentors_json, 'r') as f:
    list_of_mentors = json.load(f)

midterm_hashes_json = root_dir + '/secrets/student_email_username_hashes_before_midterm.json'
with open(midterm_hashes_json, 'r') as f:
    midterm_hashes = json.load(f)


@app.route("/mid-term")
def mid_term():
    # return "Mid-term evaluations have now been closed. You can write to us at kwoc@kossiitkgp.in"
    return render_template('mid-term-student.html',
                           list_of_mentors=list_of_mentors,
                           hashes=midterm_hashes)


mentor_ids_json = root_dir + '/secrets/mentor_unique_ids.json'
with open(mentor_ids_json, 'r') as f:
    mentor_ids = json.load(f)

mentor_student_mappings_json = root_dir + '/secrets/mentor_student_mappings.json'
with open(mentor_student_mappings_json, 'r') as f:
    mentor_student_mappings = json.load(f)


@app.route("/mid-term/<mentor_id>")
def mid_term_mentor(mentor_id):
    if mentor_id in mentor_ids:
        mentor = mentor_ids[mentor_id]
        students = mentor_student_mappings.get(mentor, [])
        new_students = []
        for i in students:
            try:
                new_students.append([i[0], stats_dict[i[0].lower().strip()]])
            except KeyError:
                pass
        return render_template('mid-term-mentor.html',
                               mentor_id=mentor_id,
                               mentor=mentor,
                               students=new_students)
    else:
        return redirect("/", code=302)


endterm_hashes_json = root_dir + '/secrets/student_email_username_hashes_after_midterm.json'
with open(endterm_hashes_json, 'r') as f:
    endterm_hashes = json.load(f)


@app.route("/end-term")
def end_term():
    return render_template('end-term-student.html',
                           hashes=endterm_hashes)


schedule_csv = root_dir + '/secrets/schedule.csv'
schedule = []
with open(schedule_csv, 'r') as csv_file:
    raw_reader = csv.reader(csv_file)
    for row in raw_reader:
        if row[0] != '':
            schedule.append([row[0], row[1], row[2], row[3]])


talks_csv = root_dir + '/secrets/talks.csv'
talks = {}
with open(talks_csv, 'r') as csv_file:
    raw_reader = csv.reader(csv_file)
    header = next(raw_reader, None)
    for row in raw_reader:
        talk_id = row[10]
        speaker_name = row[4]
        speaker_bio = row[5]
        talk_name = row[7]
        talk_abstract = row[8]
        talks[talk_id] = {
            'speaker_name': speaker_name,
            'speaker_bio': Markup(markdown.markdown(speaker_bio)),
            'talk_name': talk_name,
            'talk_abstract': Markup(markdown.markdown(talk_abstract))
        }


@app.route("/summit")
def summit():
    return render_template('summit.html',
                           schedule=schedule,
                           talks=talks)


@app.route("/summit/register")
def summit_register():
    return render_template('summit_register_form.html')


@app.route("/summit/<talk_id>")
def summit_talkid(talk_id):
    if talk_id in talks:
        return render_template('summit_talkid.html',
                               talk=talks[talk_id])
    else:
        return redirect('/summit', code=302)


@app.route("/dashboard")
def dashboard():

    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')
    # print('HI')
    git_handle = session.get('user')
    if git_handle is not None and git_handle in stats_dict:
        return render_template('dashboard.html', **stats_dict[git_handle])
    else:
        return redirect('/stats', code=302)


@app.route("/auth/")
def auth():
    if session.get('user') is None:
        return redirect(oauth.ret_auth_url())
    else:
        return redirect('/dashboard', code=302)


stud_json = root_dir + '/gh_login/gh_login_student.json'
studcsv = root_dir + '/gh_login/student.csv'


@app.route("/token")
def token():
    code=request.args.get('code')
    access_token = oauth.ret_token(code)
    if access_token == -1:
        # Add Error Handling
        return redirect("/")
    session['access_token'] = access_token
    session['code'] = code
    
    data = requests.get("https://api.github.com/user?access_token={}".format(access_token))
    dict_data = data.json()
    session['data'] = dict_data
    session['user'] = dict_data['login']
    if session.get('user'):
        g.ghname = session.get('user')
    else:
        g.ghname = "Login"

    dict_val = dict()
    dict_val['id'] = dict_data['login']
    dict_val['ava_id'] = dict_data['avatar_url']
    dict_val['token'] = access_token

    with open(studcsv, 'r') as file_csv:
        raw_header = csv.reader(file_csv)
        for row in raw_header:
            if dict_val['id'] == row[2]:
                dict_val['college'] = row[3]
    # with open(stud_json,'w+') as stdjs:
    # 	json
    # 	json.dump(dict_val, stdjs)
    try:
        with open(stud_json, "r") as stud_file:
            stud_dict = json.load(stud_file)
    except (FileNotFoundError, FileExistsError) as err:
        # print(err)
        stud_dict = dict()

    stud_dict[dict_val['id']] = dict_val
    with open(stud_json, "w") as stud_file:
        json.dump(stud_dict, stud_file)

    # user = githubhandle, accesstoken = access_token
    return redirect("/dashboard")


@app.route('/logout')
def logout():
    session['user'] = None
    g.ghname = "Login"

    return redirect(request.referrer)

# # Lines below should not be needed for Python 3
# from imp import reload
# reload(sys)
# try:
#     sys.setdefaultencoding('utf-8')
# except:
#     pass
# # above three lines are IMPORTANT


if __name__ == '__main__' and "RUNNING_PROD" not in os.environ:
	
	app.run(host='0.0.0.0')

