from yaspin import yaspin 
import pyfiglet
import inquirer
import time 
import os 
from list import List 

class Add:
    def addList(self):
        add_list = List()
        item = [
            inquirer.Text("item", message="Item")
        ]
        added_item = inquirer.prompt(item)
        # os.system("cls" if os.name == "nt" else "clear")
        add_list = List()
        add_list.lists_created(added_item["item"])