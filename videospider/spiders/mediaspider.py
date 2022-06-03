import scrapy, execjs, re
from items import VideoItem


class MediaspiderSpider(scrapy.Spider):
    name = 'mediaspider'
    allowed_domains = ['91porn.com']
    start_urls = ['http://91porn.com/v.php?next=watch']
    page_num = 0
    cookies = {
        "DUID": "6bfak3FcLnBLhLSVbnWYmVurZf8f6UIjpfTm4Vs",
        "level": "fd116dkKoGHKJzUKuWyiVR378h5Vl%2Fo28oiM4dRx"
    }
    jsobj = None

    def start_requests(self):
        #读取解密脚本
        with open("./videospider/encode.js", 'r', encoding='utf-8') as f:
            source = f.read()
            self.jsobj = execjs.compile(source)
        yield scrapy.Request(self.start_urls[0])

    def parse(self, response):
        self.page_num += 1
        print(f"\033[1;32m 已获取第{self.page_num}页内容\033[0m")
        #获取链接
        detail_urls = response.xpath(
            "//div[@class='col-sm-12']/div/div/div/a/@href").getall()
        #获取封面
        detail_images = response.xpath(
            "//div[@class='col-sm-12']/div/div/div/a/div/img/@src").getall()
        for index, url in enumerate(detail_urls):
            img = detail_images[index]
            yield scrapy.Request(url,
                                 callback=self.detail_parse,
                                 meta={"img": img},
                                 cookies=self.cookies)
        next_page_text = response.xpath(
            "//div[@class='pagingnav']/form/a/text()").getall()[-1]
        #获取下一页
        if (next_page_text == "»"):
            next_page_url = response.urljoin(
                response.xpath(
                    "//div[@class='pagingnav']/form/a/@href").getall()[-1])
            yield scrapy.Request(next_page_url)

    def detail_parse(self, response):
        item = VideoItem()
        #页面url
        item['url'] = response.url
        #标题
        item['name'] = response.xpath("//h4/text()").get().strip()
        #封面
        item['img'] = response.meta["img"]
        #解密获取m3u8地址
        m3u8_html = self.encodeJS(
            response.xpath("//video/script/text()").get().split('("')[1].split(
                '")')[0])
        pattern = re.compile("'(.*?)'")
        item['m3u8'] = pattern.findall(m3u8_html)[0]
        #视频信息
        info = response.xpath(
            "//span[@class='video-info-span']/text()").getall()
        item['time'] = info[0]
        item['viewer'] = info[1]
        item['favorites'] = info[1]
        item['author'] = response.xpath("//span[@class='title']/text()").get()
        #上传日期
        item['upload_time'] = response.xpath(
            "//span[@class='title-yakov']/text()").get()
        print(item)
        #回传至pipeline

    def encodeJS(self, arg):
        return self.jsobj.call("strencode2", arg)
