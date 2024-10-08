#!/usr/bin/env python3
''' Module that takes two ints and returns total_time '''
import asyncio
import time


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    '''
    Function: 'measure_time'
    Arguments: two int's
    Return: total_time / n
    '''
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
