#!/usr/bin/env python3
''' Collect 10 random numbers, using async comprehension '''
from typing import Generator, List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    '''arguments: none, return: 10 random numbers '''
    return [i async for i in async_generator()]
