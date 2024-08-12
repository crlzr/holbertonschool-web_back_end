'''
module that takes a float as arg and returns a function
that multiplies a float by multiplier
'''

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''
    function 'make_multiplier'
    Args: float
    Return: function that multiplies
    '''
    def func(fl: float) -> float:
        return fl * multiplier

    return func
