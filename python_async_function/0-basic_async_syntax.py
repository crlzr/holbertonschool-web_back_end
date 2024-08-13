'''
Asyinc coroutine
'''
import asyncio
from random import random


async def wait_random(max_delay: int = 10) -> float:
    '''
    Async coroutine: wait_random
    Arguments: max_delay (default value 10)
    Returns: Random delay between 0 and max_delay as a float
    '''
    delay = random() * max_delay
    await asyncio.sleep(delay)
    return float(delay)
