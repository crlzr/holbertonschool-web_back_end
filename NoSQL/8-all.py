#!/usr/bin/env python3
''' Module that lists all documents in a collection '''
from pymongo import MongoClient

def list_all(mongo_collection):
    ''' lists all documents in collection '''
    cursor = mongo_collection

    for x in mongo_collection.find():
        return cursor
    return []