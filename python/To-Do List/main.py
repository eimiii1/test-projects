import inquirer
from yaspin import yaspin
import pyfiglet
import os
import time
from add import Add
from item import Item
import json

added_items = []  # create a list to store added items (should be outside the main() function)


def main():
    add_module = Add()  # Add Clas
    item_module = Item()

    title = pyfiglet.figlet_format("To-Do List")
    print(title)
    print()

    functions = [
        inquirer.List(
            "function",
            message="Select a function",
            choices=["Add List", "Check List", "Exit"],
        )
    ]

    selected_function = inquirer.prompt(functions)

    os.system("cls" if os.name == "nt" else "clear")

    if selected_function["function"] == "Add List":
        add_module.addList()
        added_items.extend(add_module.items)

    elif selected_function["function"] == "Check List":
        item_module.show_item(added_items)

    elif selected_function["function"] == "Exit":
        exit_title = pyfiglet.figlet_format("Exiting...")
        print(exit_title)

        with yaspin(text=""):
            time.sleep(1)

        os.system("cls" if os.name == "nt" else "clear")
        exit()


while True:
    os.system("cls" if os.name == "nt" else "clear")
    main()

