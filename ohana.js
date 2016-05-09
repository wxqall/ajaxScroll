var Server = require("./node_modules/ohana");
var Mock = require("./node_modules/mockjs");
var server = new Server({
        parser : Mock.mock
    });
server.get('/article/', {
    delay: 500,
    data: function(params, query) {
        console.log(params);
        console.log(query);
        if(query.page == 3){
            return {
                "status": "ok",
                "total_count": 100,
                "data|3": [
                    {
                        "id|1-10000": 1,
                        "title": "@TITLE(5, 7)",
                        "type|1-4":1,//1是未读（黑）,2是已读（灰）,3是已删除（red）,4是未知（黄）
                        "author": "@NAME",
                        "post_time": "@DATETIME('yyyy-MM-dd HH:mm:ss')",
                        "read_count|0-1000": 100
                    }
                ]
            }
        }else{
            return {
                "status": "ok",
                "total_count": 100,
                "data|10": [
                    {
                        "id|1-10000": 1,
                        "title": "@TITLE(5, 7)",
                        "type|1-4":1,//1是未读（黑）,2是已读（灰）,3是已删除（red）,4是未知（黄）
                        "author": "@NAME",
                        "post_time": "@DATETIME('yyyy-MM-dd HH:mm:ss')",
                        "read_count|0-1000": 100
                    }
                ]
            }
        }

    }
});
server.start(3000)