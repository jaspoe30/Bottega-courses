import operator
from functools import reduce
a = [4, 65, 12,56]
print (reduce(operator.add, a))
print (reduce(operator.sub, a))
print (reduce(operator.mul, a))
print (reduce(operator.truediv, a))