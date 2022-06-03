# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

class VideoItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    url = scrapy.Field()
    name = scrapy.Field()
    img = scrapy.Field()
    m3u8 = scrapy.Field()
    upload_time = scrapy.Field()
    time = scrapy.Field()
    viewer = scrapy.Field()
    favorites = scrapy.Field()
    author = scrapy.Field()
