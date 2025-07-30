import inquirer
import json
from yaspin import yaspin
import time
import pyfiglet

x = { # data to be converted into json
    "name": "Philip",
    "age": 19,
    "address": "Gapan City",
    "birth": "May 16, 2006"
}

# save as file 

with open("my-data.json", "w") as file:
    json.dump(x, file, indent=4)

print("file saved.")

load_file = [
    inquirer.List(
        "answer",
        message="Load the file?",
        choices=["Yes", "No"]
    )
]

load_prompt = inquirer.prompt(load_file) # prompt to choose if yes / no 

if load_prompt["answer"] == "Yes":
    with open("my-data.json", "r") as file:
        loaded_file = json.load(file)
        print()

        for key, value in loaded_file.items():
            print(f"{key}: {value}")

elif load_prompt["answer"] == "No":
    with yaspin(text=""):
        time.sleep(1)

        exit = pyfiglet.figlet_format("Exit")
        print(exit)
