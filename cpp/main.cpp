#include <iostream>

class Car {
    public:
    std::string brand;
    int year;

    void honk() {
        std::cout << "Beep beep!" << std::endl;
    }
};

int main() {
    Car myCar;
    myCar.brand = "Toyota";
    myCar.year = 2022;
    myCar.honk();
}