import random

class BankAccount:
    def __init__(self, type):
        self.balance = 0
        self.type = type
        self.interest_rate = ".02"
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

    def accumulate_interest(self):
        self.balance *= 1.02
        return self.balance

    def __compare__(self, other_account):
        if self.balance == other_account.balance:
            return 'equal'
        elif self.balance > other_account.balance:
            return 'greater'
        elif self.balance >= other_account.balance:
            return 'greater than or equal to'
        elif self.balance < other_account.balance:
            return 'less than'
        else:
            return 'less than or equal to'

class ChildAccount(BankAccount):
    def __init__(self):
        super().__init__("child")
        self.interest_rate = 0
    def accumulate_interest(self):
        self.balance += 10

class OverdraftAccount(BankAccount):
    def __init__(self):
        super().__init__("overdraft")
        self.overdraft_penalty = 40
    def withdraw(self, dollars):
        if dollars > self.balance:
            self.balance -= self.overdraft_penalty
            print("He's owes the bank ${} and doesn't get to party.".format(rich_man.overdraft_penalty))
            return False
        else:
            self.balance -= dollars
            return dollars
    def accumulate_interest(self):
        if(self.balance > 0):
            self.balance *= 1.02
            return self.balance
        else:
            return


# rich_man = BankAccount("checking")
# rich_man.deposit(100000000)
#
# def ballin():
#     rich_man.withdraw(random.randint(500000, 25000000))
#
# for i in range(1, 40):
#     if rich_man.overdraft_fees < 100:
#         ballin()
#         print("He has {} left".format(rich_man.balance))
#     else:
#         print("He's in ${} of debt after {} parties".format(rich_man.balance - 100, i))
#         break
# print("What a baller.")

# rich_man = OverdraftAccount()
# rich_man.deposit(100000000)
#
# def ballin():
#     rich_man.withdraw(random.randint(1000, 100000))
#
# i = 0
# while (rich_man.withdraw(random.randint(1, 50000000))):
#     i += 1
#     print("He has {} left".format(rich_man.balance))
# print("He went to {} parties".format(i))
# print("What a baller.")

partner1 = BankAccount("checking")
partner1.balance = 40000

partner2 = BankAccount("checking")
partner2.balance = 20000

new_account = BankAccount("joint")
new_account.deposit(partner1.withdraw(partner1.balance) + partner2.withdraw(partner2.balance))
print("We have {}".format(new_account.balance))
