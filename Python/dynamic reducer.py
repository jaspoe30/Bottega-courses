import operator
from functools import reduce

def dynamic_reducer(collection, op):
    operators = {
        "+": operator.add,
        "-": operator.sub,
        "*": operator.mul,
        "/": operator.truediv,
    }

    return reduce((lambda total, element: operators[op](total, element)), collection)

print(dynamic_reducer([8,4,2,56], "+"))
print(dynamic_reducer([8,4,34,56], "-"))
print(dynamic_reducer([8,4,2,56], "*"))
print(dynamic_reducer([23,8,23,76], "/"))