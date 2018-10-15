import random

class BankAccount:
    def __init__(self, type):
        self.balance = 0
        self.type = type
        self.overdraft_fees = 0
    def withdraw(self, dollars):
        if self.overdraft_fees > 100:
            print ('Cannot Withdraw')
            return -1
        elif self.balance < dollars:
            self.overdraft_fees += 20
        self.balance -= dollars
        return dollars

    def deposit(self, dollars):
        self.balance += dollars
        return self.balance

rich_man = BankAccount("checking")
rich_man.deposit(100000000)

def ballin():
    rich_man.withdraw(random.randint(500000, 25000000))

for i in range(1, 40):
    if rich_man.overdraft_fees < 100:
        ballin()
        print("He has {} left".format(rich_man.balance))
    else:
        print("He's in ${} of debt after {} parties".format(rich_man.balance - 100, i))
        break
print("What a baller.")
