# -*- coding: utf-8 -*-
import collections
import csv
import sys
import os
import json
import requests
import ast
import datetime
import time
from flask import render_template, redirect, Markup, request, session, g, make_response
import markdown
from kwoc import config, oauth

sys.path.append("kwoc")

app, sess = config.create_app()
sess.init_app(app)


# Load stats.json file
dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])
stats_json = root_dir + '/gh_scraper/stats/stats.json'
colleges_json = root_dir + '/gh_scraper/colleges.json'
MENTOR_MATCHES = root_dir + '/secrets/mentor_student_mappings.json'
MIDEVAL_VALIDATION = root_dir + '/gh_login/midevals_validation.json'
PASS_FILE = root_dir + '/secrets/pass.txt'
FAIL_FILE = root_dir + '/secrets/fail.txt'
MENTOR_FILLED = root_dir + '/secrets/mentor_filled.json'

with open(stats_json, 'r') as f:
    stats_dict = json.load(f)
# stats_dict = {}

present_flag=False #This flag ensures, if the id is present or not in stud_json. True refers to id present, and false otherwise

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


# uncomment after mid-term evals
# non_zero_contributions = collections.OrderedDict(
#     sorted(non_zero_contributions.items(), key=lambda t: t[1]['name']))
# zero_contributions = collections.OrderedDict(
#     sorted(zero_contributions.items(), key=lambda t: t[1]['name']))
# non_zero_contributions.update(zero_contributions)
#
# # Final data
# stats_dict = non_zero_contributions


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
	# Initial number of rows to load = 50
	if session.get('user') is None:
		g.ghname = "Login"
	else:
		g.ghname = session.get('user')

	return render_template('stats.html', stats=stats_dict, ghname=g.ghname)
    # return render_template('coming_soon.html', ghname=g.ghname)



@app.route('/stats/<git_handle>')
def user_stats(git_handle):
    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')

    git_handle = git_handle.lower()
    if git_handle in stats_dict:
        ndict = stats_dict[git_handle]
        ndict['username'] = git_handle
        # print(ndict)
        return render_template('profile.html', **ndict)
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


# @app.route("/student_form")
# def student_form():
#     # return "Registrations have now been closed. See you next year !"
#     with open(colleges_json, 'r') as f:
#         data = json.load(f)
#         colleges = list(data.values())
#     print(colleges)
#     return render_template('student_form.html', colleges=colleges)


@app.route("/projects")
def projects():

    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')

    return render_template('projects.html',ghname=g.ghname)

# TODO: Refine this @xypnox

# @app.route("/profile")
# def profile():
#
#     if session.get('user') is None:
#         g.ghname = "Login"
#     else:
#         g.ghname = session.get('user')
#     return render_template('profile.html')


mentors_json = root_dir + '/gh_scraper/list_of_mentors.json'
with open(mentors_json, 'r') as f:
    list_of_mentors = json.load(f)

midterm_hashes_json = root_dir + '/secrets/student_email_username_hashes_before_midterm.json'
with open(midterm_hashes_json, 'r') as f:
    midterm_hashes = json.load(f)


@app.route("/mid-term")
def mid_term():
    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')
    # return "Mid-term evaluations have now been closed. You can write to us at kwoc@kossiitkgp.in"
    # Testing: uncomment below
    # g.ghname = "kucchobhi"
    try:
        with open(MIDEVAL_VALIDATION, "r", encoding='utf-8') as mideval_validation_file:
            mideval_validation = json.load(mideval_validation_file)
    except:
        mideval_validation = dict()
    
    if g.ghname == "Login":
        return redirect("/", code=302)
    elif g.ghname in mideval_validation.keys():
        return redirect("/dashboard", code=302)
    else:
        return render_template('mid-term-student.html',
                               list_of_mentors=list_of_mentors)

@app.route("/mentor-appending", methods=['POST'])
def men_match():
    """
    appends a student to the mentor of his choice
    in the file MENTOR_MATCHES
    """
    print(request.form)
    to_append = [
            request.form['gitlink'],
            request.form['email']
        ]
    to_append_to = request.form['mentor']   

    try:
        with open(MENTOR_MATCHES, "r", encoding='utf-8') as mentor_file:
            mentors_studs_matches = json.load(mentor_file)
    except:
        mentors_studs_matches = dict()

    stud_matches = mentors_studs_matches.get(to_append_to, [])
    
    # if student not already in mentor's student list
    if to_append not in stud_matches:
        stud_matches.append(to_append)
        mentors_studs_matches.update({
            to_append_to: stud_matches
        })
        with open(MENTOR_MATCHES, "w+", encoding='utf-8') as mentor_file:
            json.dump(mentors_studs_matches, mentor_file)
    
    
    student_gitlink = request.form['gitlink']

    try:
        with open(MIDEVAL_VALIDATION, "r", encoding='utf-8') as mideval_validation_file:
            mideval_validation = json.load(mideval_validation_file)
    except:
        mideval_validation = dict()

    if student_gitlink not in mideval_validation:
        mideval_validation.update({
            student_gitlink: True
        })
        with open(MIDEVAL_VALIDATION, "w+", encoding='utf-8') as mideval_validation_file:
            json.dump(mideval_validation, mideval_validation_file)
    
    return redirect("/dashboard")


mentor_ids_json = root_dir + '/secrets/mentor_unique_ids.json'
with open(mentor_ids_json, 'r') as f:
    mentor_ids = json.load(f)

mentor_student_mappings_json = root_dir + '/secrets/mentor_student_mappings.json'
with open(mentor_student_mappings_json, 'r') as f:
    mentor_student_mappings = json.load(f)

# the below code adds all the students of a mentor across multiple projects to a single entry
new_mentor_student_mappings = dict()
for key in mentor_student_mappings.keys():
    new_key =  key.split('|')[0]
    new_key = new_key[:-1]
    # print(new_key)
    if new_key not in new_mentor_student_mappings.keys():
        new_mentor_student_mappings[new_key] = mentor_student_mappings[key]
    else:
        new_mentor_student_mappings[new_key].extend(mentor_student_mappings[key])
mentor_student_mappings = new_mentor_student_mappings
# print(mentor_student_mappings)

@app.route("/mid-term/<mentor_id>")
def mid_term_mentor(mentor_id):
    try:
        with open(MENTOR_FILLED, "r", encoding='utf-8') as mf:
            already_filled = json.load(mf)
    except:
        already_filled = []

    if mentor_id in mentor_ids and mentor_id not in already_filled:
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
    elif mentor_id in already_filled:
        return make_response("You have already filled the mid-evals!", 400)
    else:
        return make_response("Wrong hash code! Please check if the entered key is correct", 400)


@app.route("/mid-term-mentor", methods=['POST'])
def save_mentor_resp():
    """
    Takes the response from mentor, adds passed students to secrets/pass.txt and failed students
    to secrets/fail.txt

    Also adds the mentor id to a file secrets/mentor_filled.json which checks if the mentor has already 
    filled the mid-evals
    """
    # print(request.form)
    data = request.form
    
    # adding mentor_id to json file
    mentor_id = data.get('mentor_id', -1)
    if mentor_id!= -1:
        try:
            with open(MENTOR_FILLED, "r", encoding='utf-8') as mf:
                already_filled = json.load(mf)
        except:
            already_filled = []
        already_filled.append(mentor_id)
        
        with open(MENTOR_FILLED, "w+", encoding='utf-8') as mf:
            json.dump(already_filled, mf)
    
    # storing pass and fail students
    students = data.get('evaluation', "none").split("\r\n")
    students = students[:-1]
    # print(students)
    for student in students:
        stud_data = student.split(" ")
        to_append = str(stud_data[0]) + " " + str(stud_data[len(stud_data)-1]) + "\n"
        if stud_data[len(stud_data)-1] == "PASS":
            with open(PASS_FILE, "a+", encoding='utf-8') as pf:
                pf.write(to_append)
        else:
            with open(FAIL_FILE, "a+", encoding='utf-8') as ff:
                ff.write(to_append)

    return redirect("/")

# endterm_hashes_json = root_dir + '/secrets/student_email_username_hashes_after_midterm.json'
# with open(endterm_hashes_json, 'r') as f:
#     endterm_hashes = json.load(f)


# @app.route("/end-term")
# def end_term():
#     return render_template('end-term-student.html',
#                            hashes=endterm_hashes)


# schedule_csv = root_dir + '/secrets/schedule.csv'
# schedule = []
# with open(schedule_csv, 'r') as csv_file:
#     raw_reader = csv.reader(csv_file)
#     for row in raw_reader:
#         if row[0] != '':
#             schedule.append([row[0], row[1], row[2], row[3]])


# talks_csv = root_dir + '/secrets/talks.csv'
# talks = {}
# with open(talks_csv, 'r') as csv_file:
#     raw_reader = csv.reader(csv_file)
#     header = next(raw_reader, None)
#     for row in raw_reader:
#         talk_id = row[10]
#         speaker_name = row[4]
#         speaker_bio = row[5]
#         talk_name = row[7]
#         talk_abstract = row[8]
#         talks[talk_id] = {
#             'speaker_name': speaker_name,
#             'speaker_bio': Markup(markdown.markdown(speaker_bio)),
#             'talk_name': talk_name,
#             'talk_abstract': Markup(markdown.markdown(talk_abstract))
#         }


# @app.route("/summit")
# def summit():
#     return render_template('summit.html',
#                            schedule=schedule,
#                            talks=talks)


# @app.route("/summit/register")
# def summit_register():
#     return render_template('summit_register_form.html')


# @app.route("/summit/<talk_id>")
# def summit_talkid(talk_id):
#     if talk_id in talks:
#         return render_template('summit_talkid.html',
#                                talk=talks[talk_id])
#     else:
#         return redirect('/summit', code=302)


@app.route("/dashboard")
def dashboard():

    if session.get('user') is None:
        g.ghname = "Login"
    else:
        g.ghname = session.get('user')
    # print('HI')
    git_handle = session.get('user')

    # if git_handle is not None and git_handle in stats_dict:
    #     return render_template('dashboard.html', **stats_dict[git_handle])

    # Testing: uncomment below
    # NOTE: To run on local server, just give a manual git_handle 
    # git_handle = 'rapperdinesh'

    # change to true when student registration open, false otherwise
    # more changes are required in dashboard.html; the keys of the dictionary used.
    reg_open = False
    if reg_open:
        with open(stud_json, 'r') as f:
            stud_dict = json.load(f)
    else:
        stud_dict = {}
    try:
        with open(MIDEVAL_VALIDATION, "r", encoding='utf-8') as mideval_validation_file:
            mideval_validation = json.load(mideval_validation_file)
    except:
        mideval_validation = dict()

    if git_handle in mideval_validation:
        mideval = True
    else:
        mideval = False

    if git_handle is not None and (git_handle in stud_dict or git_handle in stats_dict):
        if reg_open:
            ndict = stats_dict[git_handle]
            ndict['username'] = git_handle
            ndict['mideval'] = mideval
            return render_template('dashboard.html', **ndict)
        else:
            ndict = stats_dict[git_handle]
            ndict['mideval'] = mideval
            return render_template('dashboard.html', **ndict)
    else:
        return redirect('/stats', code=302)


@app.route("/auth/")
def auth():

    if request.referrer == None:
        return redirect("/")

    if session.get('user') is None:
        return redirect(oauth.ret_auth_url())
   
    else:

        # Check if the id is registered or not
        #-------------------------------------
        
        try:
            with open(stud_json, "r") as stud_file:
                stud_dict = json.load(stud_file)
        except (FileNotFoundError, FileExistsError, json.decoder.JSONDecodeError) as err:
            # print(err)
            stud_dict = dict()
        global present_flag
        for val in stud_dict:
            if session["dict_val"]['id'] in val:
                present_flag=True

        # If the user is not registered
        # -----------------------------
        if present_flag is False:
            return redirect("/student_registration")
            
        # If the user is registered
        # -------------------------
        else:
            return redirect("/dashboard")

stud_json = root_dir + '/gh_login/gh_login_student.json'
studcsv = root_dir + '/gh_login/student.csv'


@app.route('/student_registration', methods=['POST','GET'])
def reg():

    stud_reg_open = False

    if stud_reg_open:
        dict_val = session.get('dict_val')
        stud_dict = session.get('stud_dict')

        if request.method == 'POST':
            dict_stud_csv = dict()
            dict_stud_csv['name'] = request.form['name']
            dict_stud_csv['email'] = request.form['email']
            dict_stud_csv['gitlink'] = request.form['gitlink']
            dict_stud_csv['college'] = request.form['college']
            dict_stud_csv['year'] = request.form['year']
            dict_stud_csv['how'] = request.form['how']
            dict_stud_csv_lst = [dict_stud_csv]

            with open(studcsv, 'a+') as file_csv:
                fields = ['name','email','gitlink','college','year','how']
                writer = csv.DictWriter(file_csv, fieldnames=fields)
                writer.writerows(dict_stud_csv_lst)



            with open(studcsv, 'r') as file_csv:
                raw_header = csv.reader(file_csv)
                for row in raw_header:
                    #Please make sure that the csv file contains the header atleast
                    if dict_val['id'] == row[2]:
                        dict_val['college'] = row[3]

            stud_dict[dict_val['id']] = dict_val
            with open(stud_json, "w+") as stud_file:
                json.dump(stud_dict, stud_file)

            return(redirect('/dashboard'))


        elif request.method == 'GET':
            with open(colleges_json, 'r') as f:
                data = json.load(f)
                colleges = list(data.values())
            # print(colleges)

            temp_dict_val = dict_val
            if not temp_dict_val["email"]:
                temp_dict_val["email"] = ""

            if not temp_dict_val["name"]:
                temp_dict_val["name"] = ""

            return render_template('student_form.html', data=temp_dict_val, colleges=colleges)
    else:
        if session.get('user') is None:
            g.ghname = "Login"
        else:
            g.ghname = session.get('user')
        return render_template('reg_over.html')


@app.route("/token")
def token():

    # if request.referrer == None:
    #     return redirect("/")


	# Part getting the access_token and filling the data in the session object
	#-------------------------------------------------------------------------

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

    # We set the values in the dictionary 
    dict_val = dict()
    dict_val['id'] = dict_data['login']
    dict_val['ava_id'] = dict_data['avatar_url']
    dict_val['token'] = access_token
    dict_val['name'] = dict_data['name']
    dict_val['email'] = dict_data['email']
    session['dict_val'] = dict_val

    # Check if the id is registered or not
    #-------------------------------------
    try:
        with open(stud_json, "r") as stud_file:
            stud_dict = json.load(stud_file)
    except (FileNotFoundError, FileExistsError, json.decoder.JSONDecodeError) as err:
        # print(err)
        stud_dict = dict()
    global present_flag
    for val in stud_dict:
    	if dict_val['id'] in val:
    		present_flag=True

    
    session['stud_dict'] = stud_dict
    # If the user is not registered
    # -----------------------------
    if present_flag is False:
        session.pop('user', None)
        g.ghname = 'Login'
        return redirect("/student_registration")
    	
    # If the user is registered
    # -------------------------
    else:
        return redirect("/dashboard")
    

    # First we get the user data from github oauth
    # Then we check if the user id is present in stud_json, containing the list of registered students
    # If present, then we skip the addition and redirect them to dashboard
    # If not present, then we ask them to fill the details in registered form
    	# We also update the stats and add them in the stud_json and stud_csv, which co	

    # user = githubhandle, accesstoken = access_token
    


@app.route('/logout')
def logout():

    if request.referrer == None:
        return redirect("/")

    session['user'] = None
    g.ghname = "Login"

    return redirect('/', code=302)

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

