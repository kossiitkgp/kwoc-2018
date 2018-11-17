import os
import requests as rq


CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
# Call back URL = 127.0.0.1:5000/token

def ret_auth_url():
    auth_url = "https://github.com/login/oauth/authorize"
    SCOPES = ["user"]

    url = auth_url + '?' + "client_id=" + CLIENT_ID + '&' + 'scope=' + SCOPES[0]
    if len(SCOPES) > 1:
        for scope in SCOPES[1:]:
            url += '+' + scope
    
    url += '&access_type=offline&response_type=code'
    return url

def ret_token(code):
    token_url = "https://github.com/login/oauth/access_token"
    payload = {}
    payload["client_id"], payload["client_secret"] = CLIENT_ID, CLIENT_SECRET
    payload["code"] = code
    resp = rq.post(token_url,payload)
    if resp.status_code != 200:
        return -1
    return resp.content.decode().split("&")[0].split("=")[-1]

if __name__ == '__main__':
    print(ret_auth_url())
