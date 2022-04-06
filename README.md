# py-repo-init
Python script that initalizes a new github repository based on your init requirements and creates a new project

## Requirements
- `git`, `python 3`

## Besides the code you will need:
- Generete your access token in your github account
- Sign in with curl command:
    `$ curl -u username:token https://api.github.com/user`
- Give execution permission for your user on this file
    `$ chmod +x init.py`
- Make this file executable or add alias with path to your script into your bashrc
- Add path into `init.py`, where your new created repos will be saved
## Syntax 
`$ python init.py -n REPONAME [--private, -p] [--gitignore, -g GITIGNORETYPE] [--create-react-app, -cra]`

## Templates
### React
- React, Typescript, Tailwind

### This script is made for linux but you can always just change commands to your shitty windows Loch Ness Monster

[Main inspiration](https://www.youtube.com/watch?v=b3ySWJinSh4&ab_channel=CuriousCoding)