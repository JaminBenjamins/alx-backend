#!/usr/bin/env python3
"""
Basic dictionary
"""


BaseCaching = __import__('base_caching').BaseCaching


class BasicCache(BaseCaching):
    """
    Basic cache class that inherits from BaseCaching
    """

    def put(self, key, item):
        """Must assign to dictionary self.cache_data
        the item value for the key
        """
        if key and item:
            self.cache_data[key] = item

    def get(self, key):
        """
        Must return the value in self.cache_data linked to key
        """
        return self.cache_data.get(key, None)
