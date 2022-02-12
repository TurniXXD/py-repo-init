#!/usr/bin/env python3
import requests
from pprint import pprint
from secrets import GITHUB_TOKEN #add your access token to secrets.py, then import here
import argparse #let you specify repo args inline
import os

parser = argparse.ArgumentParser()
parser.add_argument("--name", "-n", type=str, dest="name", required=True)
parser.add_argument("--private", "-p", dest="is_private", action="store_true")
parser.add_argument("--gitignore", "-ig", type=str, dest="git_ignore", required=False)
args = parser.parse_args()
#args vars to be passed to payload
repo_name = args.name 
is_private = args.is_private
git_ignore = args.git_ignore

#link to github api
API_URL = "https://api.github.com"
#info about repo name, desc, type
#setting arg to true
if is_private:
    payload = '{"name": "' + repo_name + '", "private": true }'
else:
    payload = '{"name": "' + repo_name + '", "private": false }'
#header api => authorization user token generated in github
headers = {
    "Authorization": "token " + GITHUB_TOKEN,
    "Accept": "application/vnd.github.v3+json"
}

#request
try:
    r = requests.post(API_URL+"/user/repos", data=payload, headers=headers)
    #r.raise_for_status()


except request.exceptions.RequestException as err:
    raise SystemExit(err)

try:
    REPO_PATH = "" #path where your new repo will be saved
    os.chdir(REPO_PATH)
    os.system("mkdir " + repo_name)
    os.chdir(REPO_PATH + repo_name)
    os.system("git init")
    os.system("git remote add origin https://github.com/user/" + repo_name + ".git")
    os.system("echo '# " + repo_name + "' >> README.md")
    os.system("echo 'run git push after everything is done: git push -u origin master' >> README.md")
    if git_ignore:
        os.system("cp" + os.path.dirname(os.path.abspath(__file__)) + "/gitignores/ " + git_ignore + ".gitignore" + REPO_PATH + repo_name)
        print('gitignore was added to your repo')
    
    os.system("git add . && git commit -m 'Initial Commit' && git push -u origin master")
    print(repo_name + ' was created in ' + REPO_PATH)
except FileExistsError as err:
    raise SystemExit(err)

#pprint(r.json())
