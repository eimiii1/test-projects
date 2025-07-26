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
        
        add_list.lists_created(added_item["item"])