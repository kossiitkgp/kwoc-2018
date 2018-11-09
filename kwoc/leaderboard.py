import requests
import traceback
import json
import os

import utils

def get_attributes(username, repo_name):
    '''
    ------- INPUT ----------------------
    username: 'kshitij10496'
    repo_name: 'kshitij10496/IIKH'
                'sympy/sympy'

    ------- OUTPUT ---------------------
    attr = {'commits':60,
            'additions':10000,
            'deletions':100,
            'prs_open':10,
            'prs_closed':5,
            'prs_merged':3}
    '''

    attr = {'commits':0,
            'additions':0,
            'deletions':0,
            'prs_open':0,
            'prs_closed':0,
            'prs_merged':0}

    query = 'https://api.github.com/repos/{}/stats/contributors?access_token={}'.format(repo_name,os.getenv('GITHUB_TOKEN'))
    response = requests.get(query).json()

    try:
        for data in response:
            if data['author']['login'].lower() == username.lower():
                attr['commits'] += int(data['total'])
                attr['additions'] += sum(int(week['a']) for week in data['weeks'])
                attr['deletions'] += sum(int(week['d']) for week in data['weeks'])

    except TypeError:
        msg = 'Unable to get attributes in {} repo.\nFollowing error occured : {}'.format(repo_name,traceback.format_exc())
        utils.slack_notification(msg)
        return 0

    query = 'https://api.github.com/repos/{}/pulls?state=all&access_token={}'.format(repo_name,os.getenv('GITHUB_TOKEN'))
    response = requests.get(query).json()

    try:
        for data in response:
            if data['user']['login'].lower() == username.lower():
                attr['prs_open'] += 1
                attr['prs_closed'] += 1 if data['closed_at'] else 0
                attr['prs_merged'] += 1 if data['merged_at'] else 0

    except TypeError:
        msg = 'Unable to get attributes in {} repo.\nFollowing error occured : {}'.format(repo_name,traceback.format_exc())
        utils.slack_notification(msg)
        return 0

    return attr