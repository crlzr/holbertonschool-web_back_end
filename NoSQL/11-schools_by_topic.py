#!/usr/bin/env python3
''' Module that returns a list of schools based on arguments '''
from pymongo import MongoClient

def schools_by_topic(mongo_collection, topic):
    ''' returns the list of schools having a specific topic '''
    results = list(mongo_collection.find({"topics": topic}))
    return results