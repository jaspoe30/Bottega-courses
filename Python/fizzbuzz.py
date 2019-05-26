"""
Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the
number and for the multiples of five print "Buzz". For
numbers which are multiples of both three and five print
"FizzBuzz". -uses Function, Looping, Conditionals, Math
Operators"""

for num in range(1, 101):
    fb_num = ''
    if num % 3 == 0:
        fb_num += "fizz"
    if num % 5 == 0:
        fb_num += "buzz" 
    if not fb_num:
        fb_num += str(num)
    print(fb_num)