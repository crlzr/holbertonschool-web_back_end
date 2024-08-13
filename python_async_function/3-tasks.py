#!/usr/bin/env python3
'''
A module that takes an int and returns a asyncio.Task
'''
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int = 10) -> asyncio.Task:
    '''
    Function: task_wait_random
    Arguments: max_delay
    Return: asyncio.Task
    '''
    task = asyncio.create_task(wait_random(max_delay))
    return task
