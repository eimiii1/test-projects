class Deposit
{

    public double depositAmount { get; set; }
    public void mainDeposit(double amount)
    {
        Console.WriteLine($"You deposited total of amount of ${amount}.");
        depositAmount = amount;
        Balance balance = new Balance();
        balance.depositBalance = depositAmount;
    }
}

class Withdraw
{
    public double moneyWithdrew(double amount)
    {
        return amount;
}
}

class Balance
{
    private double deposit;

    public double depositBalance { get; set; }


    // total balance
    private double balance;
    public double totalBalance { get; set; }
}

class Program
{
    public double amount;

    public void System()
    {
        Console.WriteLine("[1] - Deposit");
        Console.WriteLine("[2] - Withdraw");
        Console.WriteLine("[3] - Balance");

        Console.WriteLine("");

        Console.Write("Choose (number only): ");
        int choose = 0;

        try
        {
            choose = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("");

        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }

        Program program = new Program();
        Deposit deposit = new Deposit();
        Withdraw withdraw = new Withdraw();
        Balance balance = new Balance();


            switch (choose)
        {
            case 1:
                Console.Write("Deposit amount: ");
                amount = Convert.ToDouble(Console.ReadLine());
                deposit.mainDeposit(amount);
                Console.WriteLine(deposit.depositAmount);
                break;

            case 2:
                Console.WriteLine("Withdraw amount: ");
                amount = Convert.ToDouble(Console.ReadLine());
                break;

            case 3:
                break;

            default:
                return;
        }
        
    }

    static void Main(string[] args)
    {
        Program program = new Program();
        program.System();
    }
}