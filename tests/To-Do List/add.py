from yaspin import yaspin 
import pyfiglet
import time 
import os 

class Add:
    def __init__(self):
        self.items = []
    
    def addList(self):
        add_title = pyfiglet.figlet_format("Add List")
        print(add_title)
        print()
        
        add_item = str(input("Enter the item to add: "))
        self.items.append(add_item)
        
        os.system("cls" if os.name == "nt" else "clear")