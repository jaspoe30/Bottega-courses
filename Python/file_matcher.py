import fnmatch
from fnmatch import fnmatchcase
import os
 
def list_files():
    for file in os.listdir('./python'):
        if fnmatch.fnmatch(file, "*.txt"):
            print("text files: ", file)

        if fnmatch.fnmatch(file, "*.rb"):
            print("Ruby files: ", file)

        if fnmatch.fnmatch(file, "*.yml"):
            print("Yaml files: ", file)

        if fnmatch.fnmatch(file, "*.py"):
            print("Python files: ", file)

# list_files()


players = [
    "Jose Altuve 2B",
    "Carlos Corea SS",
    "Alex Bregman 3B",
    "Scooter Gennett 2B"
]

second_base_players = [player for player in players if fnmatchcase(player, "* 2B")]

print("players that play second base:", second_base_players)