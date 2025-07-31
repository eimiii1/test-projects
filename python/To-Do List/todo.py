import inquirer 
import yaspin 
import os 
import time
import json
import pyfiglet


filename = "tasks-data.json"

def clear_screen():
    os.system("cls" if os.name == "nt" else "clear")

def add_task():
    title = pyfiglet.figlet_format("Add a task")
    print(title)

    # load file to modify and add a task
    with open(filename, "r") as file:
        data = json.load(file)
        
    task = inquirer.Text("task", message="Enter your task")
    input_task = inquirer.prompt([task])
    data["tasks"].append(input_task["task"])
    
    # write the updated data back to the file
    with open(filename, "w") as file:
        json.dump(data, file, indent=4)
        
        
    with yaspin.yaspin(text=""):
        time.sleep(1)

def view_tasks():   
    clear_screen()
    with yaspin.yaspin(text=""):
        time.sleep(1)
        
    title = pyfiglet.figlet_format("Tasks")
    print(title)
    
    with open(filename, "r") as file:
        data = json.load(file)
        
        task_number = 0
    for datas in data["tasks"]:
        task_number += 1
        print(f"{task_number}. {datas}")
        
    print()
    input("Press Enter to continue...")
    with yaspin.yaspin(text=""):
        time.sleep(1)
        
def delete_task():
    clear_screen()
    with yaspin.yaspin(text=""):
        time.sleep(1)
        
    title = pyfiglet.figlet_format("Tasks")
    print(title)
    
    with open(filename, "r") as file:
        data = json.load(file)
        
        task_number = 0
    for datas in data["tasks"]:
        task_number += 1
        print(f"{task_number}. {datas}")
        
    print()
    task = inquirer.Text("task", message="Enter the task number to delete")
    input_task = inquirer.prompt([task])
    convert_to_int = int(input_task["task"])
    
    # load the json data file 
    with open(filename, "r") as file:
        data = json.load(file)
        
    data["tasks"].pop(convert_to_int - 1)
    
    # write the updated data back to the file 
    with open(filename, "w") as file:
        json.dump(data, file, indent=4)
        
    with yaspin.yaspin(text=""):
        time.sleep(1)
# main 
def main():
    clear_screen()
    title = pyfiglet.figlet_format("To-Do List")
    print(title)

    functions = [
        inquirer.List(
            "function",
            message="Select a function",
            choices=[
                "Add a task",
                "View tasks",
                "Delete a task",
                "Exit"
            ]
        )
    ]

    # Prompt the user to select a function
    select_function = inquirer.prompt(functions)

    if select_function["function"] == "Add a task":
        while True:
            with yaspin.yaspin(text=""):
                time.sleep(1)
                
            clear_screen()
            
            add_task()
            print()
            again = [
                    inquirer.List(
                    "again",
                    message="Do you want to add another task?",
                    choices=["Yes", "No"]
                )
            ]
            again_prompt = inquirer.prompt(again)
            if again_prompt["again"] == "Yes":
                with yaspin.yaspin(text=""):
                    time.sleep(1)
                continue
            else:
                with yaspin.yaspin(text=""):
                    time.sleep(1)
                clear_screen()
                break
            
    elif select_function["function"] == "View tasks":
            view_tasks()
            
    elif select_function["function"] == "Delete a task":
        delete_task()
    
    elif select_function ["function"] == "Exit":
        clear_screen()
        print("Exiting the To-Do List application. Goodbye!")
        with yaspin.yaspin(text=""):
            time.sleep(1)
            
        clear_screen()
        exit(0)

while True:
    main()