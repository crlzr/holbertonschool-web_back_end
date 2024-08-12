#!/usr/bin/env python3
''' function that takes a list mxd_lst of ints and floats and returns
the sum as float '''
from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    '''
    type-annotated function 'sum_mixed_list'
    Arguments: mxd_lst with ints and floats
    Return: sum as a flat
  '''
    end_sum = 0.00
    for i in mxd_lst:
        end_sum += i
    return float(end_sum)
