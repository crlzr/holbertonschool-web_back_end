#!/usr/bin/env python3

from random import random
from typing import Generator
import asyncio


async def async_generator():
    for i in range(10):
        await asyncio.sleep(1)
        yield random() * 10
