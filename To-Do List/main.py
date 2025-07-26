import os
from list import List

def Main():
    print("[1] - Add List")
    print("[2] - Delete List")
    print("[3] - Check List")

    print()
    select_option = 0

    while True:
        try:
            select_option = int(input("Select an option: "))
            break
        except Exception as e:
            print()
            print(e)
            print("Only input an integer.")
            print()


    match (select_option):
        case 1:
            pass

        case 2:
            pass

        case 3:
            os.system("clear")
            call_list = List()
            call_list.ShowList("Item")
            call_list.ShowList("Item")
            call_list.ShowList("Item")

Main()