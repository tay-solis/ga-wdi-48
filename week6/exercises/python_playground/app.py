##### DATA STRUCTURES #####
# my_favorite_animal = 'Seals'
#
# print(my_favorite_animal)
#
# print(2**3)
#
# print(( (16 / 4) * (2 + 1)) ** 2)
#
# print("a milli" + "a milli" * 3)
#
#
# my_number = 3
#
# print("The best number is {}.".format(my_number))
#
# no_name = ""
# if no_name:
#     print("My name is: " + no_name)
#
# no_name = None
#
# if no_name:
#     print("My name is: " + no_name)
# else:
#     print("How do you not have a name?")
#
# age = input()
# if age:
#     print("My age is: " + age)
#
# for i in range(100):
#     if i % 3 == 0 and i % 5 == 0:
#         print("Fizzbuzz")
#     elif i % 3 == 0:
#         print("Fizz")
#     elif i % 5 == 0:
#         print("Buzz")
#     else:
#         print(i)

###### LISTS #####
# import random
#
# planets = ["Mercury", "Venus", "Earth", "Mars", "Pluto"]
#
# print(planets[1])
#
# planets.append("Jupiter")
# print(planets)
#
# planets.pop(4)
# print(planets)
#
# heavenly_bodies = ["Sun", "Stars"]
# universe = planets + heavenly_bodies
#
# sorted(universe)
#
# print(universe)
#
# random.shuffle(universe)
#
# print(universe)

##### DICTIONARIES #####
ninja_turtle = {
    "name": "Donatello",
    "color": "purple",
    "is_radical": True
}

ninja_turtle["age"] = 34

ninja_turtle.pop("age", None)
print (ninja_turtle)

ninja_turtle["pizza_toppings"] =["cheese", "pepperoni"]

print(ninja_turtle["pizza_toppings"][0])

print(ninja_turtle.keys())

for key, value in ninja_turtle.items():
    print ("{0} is {1}".format(key, value))
