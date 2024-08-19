#!/usr/bin/env python3
import asyncio
import time

'''module that will execute async_comprehension 4 times '''

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime():
    '''
    function: will execute async_c 4 times and will measure runtime
    args: non
    return: runtime
    '''
    start_time = time.time()
    await asyncio.gather(
        async_comprehension(), async_comprehension(),
        async_comprehension(), async_comprehension()
    )
    end_time = time.time()
    total_time = end_time - start_time
    return total_time
