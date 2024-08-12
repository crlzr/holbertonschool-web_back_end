''' type-annotated function with a list of floats as
args and returns the sum as float
'''
from typing import List


def sum_list(input_list: List[float]) -> float:
    '''
    Takes a list of floats and returns the sum of the floats.

    Parameters:
    input_list (List[float]): A list containing floating-point numbers.

    Returns:
    float: The sum of the numbers in the list.
    '''
    end_sum = 0.0
    for i in input_list:
        end_sum += i
    return end_sum
