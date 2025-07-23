
using System.Runtime.CompilerServices;

class Deposit // Deposit only so value is always resetting and don't hold a permanent value.
{
    private double depositValue;
    public double value
    {
        get { return depositValue; }
        set { depositValue = value; }
    }
}

class Withdraw
{
    private double withdrawValue;
    public double value
    {
        get { return withdrawValue; }
        set { withdrawValue = value; }
    }
}

class Balance
{
    private double totalBalance;
    public double total_balance
    {
        get { return totalBalance; }
        set { totalBalance = value; }
    }
}

class Program
{
    static Deposit deposit = new Deposit();
    static Withdraw withdraw = new Withdraw();
    static Balance balance = new Balance();

    public static void System()
    {

        Console.WriteLine("Bank");
        Console.WriteLine("");

        Console.WriteLine("[1] - Deposit");
        Console.WriteLine("[2] - Withdraw");
        Console.WriteLine("[3] - Exit");
        Console.WriteLine("");

        Console.Write("Select function (number only): ");

        int select = Convert.ToInt32(Console.ReadLine());


        Console.WriteLine("");
        double depositAmount = 0;
        double withdrawAmount = 0;
        double balanceAmount = 0;

        switch (select)
        {
            case 1:
                Console.Write("Amount to deposit: ");
                depositAmount = Convert.ToDouble(Console.ReadLine()); // inputs deposit amount
                deposit.value = depositAmount; // passes the input amount to value field inside the deposit class
                Console.WriteLine($"You deposited with an amount of {deposit.value}$.");
                balance.total_balance += deposit.value;
                break;

            case 2:
                Console.Write("Amount to withdraw: ");
                withdrawAmount = Convert.ToDouble(Console.ReadLine());
                withdraw.value = withdrawAmount;
                balance.total_balance -= withdraw.value;
                break;

            case 3:
                Console.WriteLine("Bank Exit.");
                Environment.Exit(0);
                break;
        }

    }

    static void Main(string[] args)
    {
        string? check = "Y";

        while (check == "Y")
        {
            System();
            Console.WriteLine("");

            Console.Write("Check Balance? [Y/N]: ");
            check = Console.ReadLine()!.ToUpper();

            Console.WriteLine("");
            Console.WriteLine($"Total Balance: {balance.total_balance}");
            Console.WriteLine("");
        }
        Console.WriteLine("Bank Exit.");
    }
}