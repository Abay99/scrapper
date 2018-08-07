var express = require('express');
var cheerio = require("cheerio");
var request = require("request")
var router = express.Router();

var scrap = function (body) {
    const $ = cheerio.load(body);
    var result = [];
    var attribute = {
        title: "",
        definition: [],
    };
    $("#body-content").children().map(function (i, el) {

        if ($(this).get(0).tagName === "h1" || $(this).get(0).tagName === "h2" || $(this).get(0).tagName === "h3" || $(this).get(0).tagName === "h4") {
            attribute.title = $(this).text().trim();
        }
        else if ($(this).get(0).tagName === "p") {
            if ($(this).hasClass("center")) {
                var itemImg = {
                    img: ""
                }
                var imgsrc = "https://www.studytonight.com/data-structures/" + $(this).children().first().attr("data-cfsrc")
                itemImg = {
                    img: imgsrc
                }
                attribute.definition.push(itemImg);
            }
            else {
                var itemText = {
                    text: ""
                };
                if ($(this).text().trim().length > 0) {
                    itemText.text = $(this).text().trim()
                    attribute.definition.push(itemText);
                }


            }
        }
        else if ($(this).get(0).tagName === "ul" || $(this).get(0).tagName === "ol") {
            var itemList = {
                list: []
            }
            var listChild = {
                title: '',
                description: ""
            };

            $(this).children().map(function (i, as) {
                if ($(this).children().length === 0) {
                    listChild.description =  $(as).text().trim();
                }
                else  {

                    $(this).children().map(function (i, el) {
                        if($(el).get(0).tagName === "code"){
                            listChild.description = $(as).text().trim();

                        }
                        if ($(el).get(0).tagName === "b") {
                            listChild.title = $(el).text().trim();
                        }
                        else if ($(el).get(0).tagName === "p") {
                            listChild.description = $(el).text().trim();
                        }

                    });
                }

                itemList.list.push(listChild)
                listChild = {
                    title:"",
                    description:""
                }


            })
            attribute.definition.push(itemList);
        }

        else if ($(this).get(0).tagName === "hr") {
            result.push(attribute);
            attribute = {
                title: "",
                definition: []
            }
        }
    })
    return result;
}

router.get('/introduction-to-data-structures', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/introduction-to-data-structures";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});
router.get('/aysmptotic-notations', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/aysmptotic-notations";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});
router.get('/space-complexity-of-algorithms', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/space-complexity-of-algorithms";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/time-complexity-of-algorithms', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/time-complexity-of-algorithms";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/linear-search-algorithm', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/linear-search-algorithm";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/binary-search-algorithm', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/binary-search-algorithm";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/bubble-sort', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/bubble-sort";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/selection-sorting', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/selection-sorting";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/insertion-sorting', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/insertion-sorting";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/merge-sort', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/merge-sort";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/quick-sort', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/quick-sort";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/heap-sort', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/heap-sort";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/stack-data-structure', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/stack-data-structure";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/queue-data-structure', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/queue-data-structure";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/circular-queue', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/circular-queue";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/queue-using-stack', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/queue-using-stack";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/introduction-to-linked-list', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/introduction-to-linked-list";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/linked-list-vs-array', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/linked-list-vs-array";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/linear-linked-list', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/linear-linked-list";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

router.get('/circular-linked-list', function (req, res, next) {
    var url = "https://www.studytonight.com/data-structures/circular-linked-list";
    var ss;
    request(url, function (err, response, body) {
        ss = scrap(body);
        res.send(ss);

    })
});

module.exports = router;
