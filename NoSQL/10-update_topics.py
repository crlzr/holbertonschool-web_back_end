#!/usr/bin/env python3
''' Module that changes all topics of a school document '''

from pymongo import MongoClient

def update_topics(mongo_collection, name, topics):
    ''' Module to change all topics of a school doc based on the name '''
    query_filter = {'name': name}
    update_operation = {'$set': {'topics': topics}}

    mongo_collection.update_many(query_filter, update_operation)

