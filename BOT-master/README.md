# Facebook Personal Chatbot
### Download: https://nodejs.org
### login

__Tạo Cookie từ Email và Password__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({email: "FB_EMAIL", password: "FB_PASSWORD"}, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});
```

__Đăng nhập bằng Cookie__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);
});
```
### Credit: https://github.com/Schmavery
### Chi tiết hơn: https://github.com/Schmavery/facebook-chat-api/blob/master/DOCS.md#login 

##-duyen-le

### // Mã hóa
###       var message = crypto.AES.encrypt('password', 'ma bi mat').toString();
   
###   // Xem chuỗi đã mã hóa
###       console.log(message);
   
###   // Lấy danh sách byte đã mã hóa
###       var bytes = crypto.AES.decrypt(message, 'ma bi mat');
   
###  // Chuyển sang chuỗi gốc
###      var message_decode = bytes.toString(crypto.enc.Utf8);



