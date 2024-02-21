#!/usr/bin/env python3
import requests

# add your access token to secrets.py, then import here
from secrets import GITHUB_TOKEN, GITHUB_USERNAME, REPO_LOCAL_PATH
import argparse  # let you specify repo args inline
import os
import pathlib

parser = argparse.ArgumentParser()
parser.add_argument("--name", "-n", type=str, dest="name", required=True)
parser.add_argument("--private", "-p", dest="is_private", action="store_true")
parser.add_argument("--gitignore", "-ig", type=str, dest="git_ignore")
parser.add_argument("--create-react-app", "-cra",
                    dest="is_cra", action="store_true")
parser.add_argument("--go-server", "-go", dest="is_go", action="store_true")

# args vars to be passed to payload
args = parser.parse_args()
repo_name = args.name
is_private = args.is_private
git_ignore = args.git_ignore
is_cra = args.is_cra
is_go = args.is_go

API_URL = "https://api.github.com"

if is_private:
    payload = '{"name": "' + repo_name + '", "private": true }'
else:
    payload = '{"name": "' + repo_name + '", "private": false }'

# header api => authorization user token generated in github
headers = {
    "Authorization": "token " + GITHUB_TOKEN,
    "Accept": "application/vnd.github.v3+json"
}

try:
    r = requests.post(API_URL+"/user/repos", data=payload, headers=headers)


except request.exceptions.RequestException as err:
    raise SystemExit(err)

try:
    def execScript(script):
        os.system("cp " + str(pathlib.Path(__file__).parent.resolve()
                            ) + "/" + script + ".sh " + REPO_LOCAL_PATH + repo_name)
        os.system("chmod +x " + script + ".sh")
        os.system("./" + script + ".sh")

    os.chdir(REPO_LOCAL_PATH)
    os.system("mkdir " + repo_name)
    os.chdir(REPO_LOCAL_PATH + repo_name)
    os.system("git init")
    os.system("git remote add origin https://github.com/" + GITHUB_USERNAME + "/" +
            repo_name + ".git")
    os.system("echo '# " + repo_name + "' >> README.md")
    os.system(
        "echo 'run `git push -u origin master` after everything is done' >> README.md")
    os.system(
        "git add . && git commit -m 'Initial Commit' && git push -u origin master")
    print(repo_name + ' was created in ' + REPO_LOCAL_PATH)
    if is_cra:
        execScript("cra")
    if is_go:
        os.system("mkdir server && cd $_")
        os.system("printf 'module github.com/" +
                GITHUB_USERNAME + "/" + repo_name + "' > go.mod")
        execScript("go")
except FileExistsError as err:
    raise SystemExit(err)
