from yaspin import yaspin 
import os 
import pyfiglet 
import time
import inquirer

class Item:   
    def show_item(self, items):
        item_title = pyfiglet.figlet_format("Check List")
        print(item_title)
        print()
        
        global tasks
    
        try:
            check_items = inquirer.checkbox(message="Select items to check (Press Ctrl + C to BACK, press Space to check/uncheck)", choices=items)
        except KeyboardInterrupt:
            with yaspin(text=""):
                time.sleep(1)
            os.system("cls" if os.name == "nt" else "clear")
            return