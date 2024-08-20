#!/usr/bin/env python3
''' A module that inserts a new document in a collection based on kwargs '''
from pymongo import MongoClient

def insert_school(mongo_collection, **kwargs):
    ''' inserts a new doc in a collection based on kwargs '''
    x = mongo_collection.insert_one(kwargs)

    return x.inserted_id