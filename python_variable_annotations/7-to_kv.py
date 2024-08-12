''' function that takes a string k and an int OR float v and returns a tuple '''

from typing import Union, List, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    '''
    function 'to_kv'
    Arguments: string k, int OR float v
    Return: returns a tuple, first element is a string k,
    the second element is the square of the float v
    '''
    square = v ** 2
    return k, square