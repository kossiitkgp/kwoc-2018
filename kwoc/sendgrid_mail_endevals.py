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
Dear Student,<br><br>

KWoC 2018 is almost over!<br><br>

At this point, you should be done with all your contributions to the projects. Now is a good time to clean up your code, update documentation and follow your mentor’s instructions about getting your code ready for final review.<br><br>

Be sure to complete your Final Evaluation before Tuesday, January 15th at 23:59 IST. You can access it from this link :<br><br>

{} <br><br>

This is a required part of your KWoC participation. The evaluation requires you to submit a final report for your work. It has to be a URL of either a blog post or a document. You can choose any blogging platform you want. Few examples are Medium.com, WordPress, GitHub static pages and Blogspot. We highly recommend you to submit a blog post, but a link to PDF file is also acceptable. Read the instructions carefully on the form.<br><br>

We shall notify you about the results soon after the deadline. The stats board will be updated and freezed with the students who successfully complete the program. The decision of the organizing team will be final and shall be based on your report.

"""

# paste your subject below, replacing the below one.
SUB = "Endterm Evaluations are due January 15th"

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
HASH_FILE = root_dir + '/hashes/hashkey_to_gitlink.json'

URL = 'https://kwoc.kossiitkgp.org/end-term/'

with open(HASH_FILE, "r") as f:
    mentor_ids = json.load(f)


# driving function
def send_sendgrid_mail(id):
    hash = mentor_ids[id]
    body = MSG.format(URL + hash)

    if send_mail(id, mail_body=body):
        print("sending mail to id = {}".format(id), flush=True)
        print("mail successfully sent to {}".format(id), flush=True)
    
    else:
        print("failed to send to {}".format(id), flush=True)


if __name__ == '__main__':    
    # print(name_email_map)
    # print(mentor_ids)
    # print(hashes)

    # threading code
    # using 16 threads to send mail since these are network calls
    threads = Pool(16)
    threads.map(send_sendgrid_mail, mentor_ids.keys())

    # # close threading and run threads
    threads.close()
    threads.join()

    print("\n\nYayyy! Successfully sent to all :)", flush=True)
