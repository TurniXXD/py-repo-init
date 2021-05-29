# py-repo-init
Python script that initalizes a new github repository based on your init requirements and then makes html, css, js basic template

For this script to work you need to have installed git and python 3

# Besides the code you will need:
- generete your access token in your github account
- sign in with curl command:
    $ curl -u username:token https://api.github.com/user
- give execution permission for your user on this file
    $ chmod +x init.py
- make this file executable or add alias with path to your script into your bashrc
- add path into init.py, where your new created repos will be saved


# Main inspiration 
https://www.youtube.com/watch?v=b3ySWJinSh4&ab_channel=CuriousCoding

# Syntax 
$ python init.py [--name, -n REPONAME] [--private, -p] [--template, -t]

# This script is made for linux but you can always just change commands to your shitty windows Loch Ness Monster