#!/usr/bin/env python3
''' Module that loops 10 times, generates random number, async'''
from random import random
from typing import Generator
import asyncio


async def async_generator() -> Generator[float, None, None]:
    '''function: async_generator, arguments:none,
    return: random numbers bw 1-10 '''
    for i in range(10):
        await asyncio.sleep(1)
        yield random() * 10
