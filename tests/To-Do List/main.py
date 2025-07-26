import inquirer 
from yaspin import yaspin
import pyfiglet
import os
import time
from add import Add

def main():
    title = pyfiglet.figlet_format("To-Do List")
    print(title)
    
    print()
    
    functions = [
        inquirer.List(
            "function",
            message="Select a function",
            choices=["Add List", "Delete List", "Check List", "Exit"]
        )
    ]
    
    selected_function = inquirer.prompt(functions)
    
    os.system("cls" if os.name == "nt" else "clear")
    
    if selected_function["function"] == "Add List":
        add_title = pyfiglet.figlet_format("Add List")
        print(add_title)
        
        add_module = Add()
        add_module.addList()
        
    elif selected_function["function"] == "Delete List":
        delete_title = pyfiglet.figlet_format("Delete List")
        print(delete_title)
        
    elif selected_function["function"] == "Check List":
        check_title = pyfiglet.figlet_format("Check List")
        print(check_title)
        
    elif selected_function["function"] == "Exit":
        os.system("cls" if os.name == "nt" else "clear")
        exit()
    
main()