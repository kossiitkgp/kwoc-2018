# -*- coding: utf-8 -*-
# import sys
# from imp import reload
# reload(sys)
# try:
#   sys.setdefaultencoding('utf8')
# except Exception:
#   pass
# #above three lines are IMPORTANT

import sendgrid
import os
from sendgrid.helpers.mail import *
import traceback
import requests
from multiprocessing.dummy import Pool
import utils

# using 8 threads to send mail since these are network calls
threads = Pool(16)


# paste your email content below, replacing the below one.
# the content should be in html, so a better way it to add <br/> for each line break.
MSG = """
Mid-eval passed
```Dear Student,<br/><br/>

Congratulations! You have passed the midterm evaluation. You may continue working in KWoC. <br/><br/>

You may choose a same or a different project for your end-eval, whichever suits you. You are requested to fill the form similar to what you did for the mid-evals by this weekend.<br/><br/>

Upcoming Deadlines are :<br/><br/>

(Extended to January 13th): Pencils down date- You should start wrapping up the project you have been working on and send your last Pull Requests by this date. You are not expected to code beyond this date.<br/><br/>

(Extended to January 16th): Endterm evaluation Report - You have to submit the end-term report by this date. The instructions are written below. You are also encouraged to spend this week writing documentation and tests for your work and the project(s). Both are as important as writing code for Open Source software.<br/><br/>

Important instructions about the final report :<br/><br/>
 - You will have to submit a report of your work at the end-term evaluation. Failing to do so will not result in successful participation.<br/><br/>
 - You have to submit the LINK TO YOUR REPORT in the form of a blog post. You can choose any blogging medium you want. Few examples are Medium, GitHub static pages, WordPress and Blogspot.<br/><br/>
 - The report can be as descriptive as you want, but must contain the following points :<br/><br/>
   - List of projects you worked on<br/><br/>
   - List of Pull Requests you created<br/><br/>
   - Summary of your work<br/><br/>

To Sum up -<br/><br/>
1. Fill the end-eval form mentioning the project for your evaluation.<br/><br/>
2. Send your last PRs by 12th <br/><br/>
3. Send your documentation by 15th January.<br/><br/>


Happy New Year and keep the Pull Requests coming!<br/><br/>

Regards,<br/><br/>
Kharagpur Open Source Society```
"""

# paste your subject below, replacing the below one.
SUB = "KWoC '18 End Term Evaluation"

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



'''Not used, for gmail smtp server
# import gmail
import smtplib
import json
from email.mime.text import MIMEText
import os
import requests
import traceback
import time

def send_mail(mail_subject, mail_body, to_email):
    # credentials = json.load(open('CONFIG', 'r'))
    msg = MIMEText(mail_body)
    msg.set_type("text/html")
    msg['Subject'] = mail_subject
    # print (msg)
    # sending mail
    flag =0
    while True :
        try:
            server = smtplib.SMTP('smtp.gmail.com:587')
            server.starttls()
            server.login(os.environ["EMAIL"],os.environ["PASSWORD"])
            server.sendmail(os.environ["EMAIL"], to_email, msg.as_string())
            server.quit()
            return True
        except :
            flag+=1
            if flag >= 5 :
                utils.slack_notification("Got following error while sending email : \n{}".format(traceback.format_exc()))
                return False
            time.sleep(1)
            # return False
'''

# driving function


def send_sendgrid_mail(id):
    if send_mail(id):
        print("sending mail to {}...".format(id), flush=True)
        print("mail successfully sent to {}".format(id), flush=True)
    else:
        print("failed to send to {}".format(id), flush=True)

# export SENDGRID_KEY before running the script with sendgrid key
# place a csv file with just emails to sendto, named "mail_ids.csv"
# DO NOT HAVE ANY HEADER OR ANY OTHER DATA, JUST MAILIDs
# Example CSV file is provided in the directory


FILE_NAME = "mail_ids.csv"
with open(FILE_NAME, "r+") as file:
    ids = file.read()

ids = ids.split("\n")

# threading code
# if for some reason the script stops in-between, please restart the script after
# removing the mails till which it has been sent.
threads.map(send_sendgrid_mail, ids)

# close threading and run threads
threads.close()
threads.join()

print("\n\nYayyy! Successfully sent to all :)", flush=True)
