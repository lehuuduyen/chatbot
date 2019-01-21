//accestoken https://graph.facebook.com/oauth/access_token?client_id=475347159657177&client_secret=aadde10915a319939de22c6186436cf2&redirect_uri=https://example.local/&grant_type=client_credentials
const fs = require("fs");
const login = require("facebook-chat-api");
var express = require('express');
var request = require('request');
// var cheerio = require('cheerio');
var app = express();
// const utf8 = require('utf8');
const access_token = "475347159657177|UvAG7ehkalh9RmbyQ2ZJmv7vUvA";
var array = ['100009128285622', '100001864154379'];
var my
var base_url='http://example.local/api/'
login({email: "duyenle955@gmail.com", password: "U2FsdGVkX1+ragrUqgZEvslg24dVZmD3I32Cz+vEOuo="}, (err, api) => {
    if (err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));

    api.setOptions({forceLogin: true, selfListen: true, logLevel: "silent", listenEvents: true});
    api.listen(function callback(err, message) {
        if(message.body!=null){
            request.post({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url:     base_url+"chat_bot/store",
                body:    "message="+message.body+"& user_id="+message.senderID
            }, function(error, response, body){
                console.log(body);
            });

        }





        // if (message.body) {
        //     var url = "https://graph.facebook.com/" + message.threadID + "?fields=id,name&access_token=" + access_token;
        //     // The structure of our request call
        //     // The first parameter is our URL
        //     // The callback function takes 3 parameters, an error, response status code and the html
        //     if (!array.includes(message.threadID)) {
        //         request(url, function (error, response, html) {
        //
        //             // First we'll check to make sure no errors occurred when making the request
        //
        //             if (!error) {
        //                 // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        //
        //
        //                 // console.log(JSON.stringify(html.name))
        //                 var data = JSON.parse(html);
        //                 var name = data.name;
        //                 // api.sendMessage('Xin chào ' + name + ' \n🙂 bạn vừa nói là : ' + message.body + ' Nhập:i love you', message.threadID)
        //
        //             }
        //
        //         })
        //     }
        //
        //     return;
        // }
    });
});
