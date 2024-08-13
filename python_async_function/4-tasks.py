#!/usr/bin/env python3
'''
A module that takes two integers and returns a list of all delays
'''
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    '''
    Function: async routine 'wait_n'
    Arguments: n: int, max_delay: int
    Return: list of all the delays (float values)
    '''

    tasks = []
    delays = []

    # Create a list of tasks
    for _ in range(n):
        tasks.append(task_wait_random(max_delay))

    # Collect results as they complete
    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)

    return delays
