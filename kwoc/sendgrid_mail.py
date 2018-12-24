# -*- coding: utf-8 -*-
import sys
from imp import reload
reload(sys)
try:
  sys.setdefaultencoding('utf8')
except Exception:
  pass
# above three lines are IMPORTANT

import sendgrid
import os
from sendgrid.helpers.mail import *
import traceback
import requests
from multiprocessing.dummy import Pool
import utils
import json, csv

# NOTE: Import sendgrid API key variables

# paste your email content below, replacing the below one.
# the content should be in html, so a better way it to add <br/> for each line break.
MSG = """
Dear Mentor {},</br>
Greetings from KOSS,</br></br>

KWoC Mid-Term evaluations are now open for mentors.</br> 
In the students' mid-term feedback, we asked them to enlist one mentor they are working with, and few of them have nominated you as their mentor.
We request you to be honest with the students, if you spot unsincere efforts and feel they are wasting your time, you should give them a Fail grade.
While at the same time, if they have informed you of being busy with their exams, there is no harm in being generous towards them.
Note that the ones which are given as fail grade, will be removed from the KWoC programme.</br></br>

Here is your unique link for the evaluation : {} </br></br>

Please fill it positively by December 27, 23:59 IST.</br>
We also look forward to hearing from you in the feedback.</br></br> 

We thank you for bearing with the doubts from your mentees and hope that your projects are growing.</br>
KWoC is not possible without dedicated efforts from mentors like you.</br></br>

Regards,
Kharagpur Open Source Society 
"""

# paste your subject below, replacing the below one.
SUB = "KWoC '19 Mentor Mid-Term Evaluations"

# paste email from which the message should look coming from, replacing the below one.
FROM = "kossiitkgp@gmail.com"


def send_mail(to_email, mail_subject=SUB, mail_body=MSG, from_email=FROM):
    sg = sendgrid.SendGridAPIClient(apikey=os.environ["SENDGRID_KEY"])
    from_email = Email("Kharagpur Open Source Society <{}>".format(from_email))
    content = Content("text/html", mail_body)
    to_email = Email(to_email)
    mail = Mail(from_email=from_email, subject=mail_subject, to_email=to_email, content=content)
    try:
        sg.client.mail.send.post(request_body=mail.get())
        return True
    except Exception:
        msg = "Got following error while sending mail :{}".format(traceback.format_exc())
        utils.slack_notification(msg)
        return False


dir_path = os.path.dirname(os.path.realpath(__file__))
root_dir = '/'.join(dir_path.split('/')[:-1])
HASH_FILE = root_dir + '/secrets/mentor_unique_ids.json'
PROJECT_FILE = root_dir + '/gh_scraper/projects.csv'

URL = 'https://kwoc.kossiitkgp.org/mid-term/'

name_email_map = {}

with open(HASH_FILE, "r") as k:
    mentor_ids = json.load(k)

with open(PROJECT_FILE,"r") as k:
    projects = csv.DictReader(k)
    for project in projects:
        name_email_map[project['name']] = project['email'] 


# driving function
def send_sendgrid_mail(hash):

    body = MSG.format(mentor_ids[hash],URL + hash)
    id = name_email_map[mentor_ids[hash]]

    if send_mail(id, mail_body=body):
        print("sending mail to id = {}, name = {}".format(id,mentor_ids[hash]), flush=True)
        print("mail successfully sent to {}".format(id), flush=True)
    
    else:
        print("failed to send to {}".format(id), flush=True)


if __name__ == '__main__':

    hashes = [id for id in mentor_ids]
    
    # print(name_email_map)
    # print(mentor_ids)
    # print(hashes)

    # threading code
    # using 16 threads to send mail since these are network calls
    threads = Pool(16)
    threads.map(send_sendgrid_mail, hashes)

    # # close threading and run threads
    threads.close()
    threads.join()

    print("\n\nYayyy! Successfully sent to all :)", flush=True)
