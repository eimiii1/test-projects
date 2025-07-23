class Person:
    def __init__(self, name, age):
        self.fname = name
        self.pAge = age

    def printName(self):
        print(self.fname, self.pAge)
        

class Philip(Person):
    pass

name = "Philip"
age = 19

philip = Philip(name, age)
philip.printName()