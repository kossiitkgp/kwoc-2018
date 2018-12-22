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
Greetings.<br/><br/>

We hope you are having a great time working through issues and interacting with your mentor(s).<br/><br/>

Due to the staggering and astonishing participation, we saw this season, our codes couldn't keep up. We deeply regret the inconvenience caused by the breaking of the statistics table and other accompanying issues. We also had reports of wrong dashboard data.<br/><br/>

Thanks to our amazing team and their dedicated efforts, we've managed to fix all the bugs and updated the statistics page, dashboard, and profile page; and added sharing capabilities so you can show your KWoC stats to your friends.<br/><br/>

Please make us aware if you observe any anomaly.<br/><br/>

Thank you.<br/>
Kharagpur Open Source Society<br/>
IIT Kharagpur
"""

# paste your subject below, replacing the below one.
SUB = "KWoC '19 Important Website Updates"

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
