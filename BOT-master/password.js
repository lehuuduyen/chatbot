var crypto = require('crypto-js');
var log = require("npmlog");

    // Get process.stdin as the standard input object.
    var standard_input = process.stdin;

    // Set input character encoding.
    standard_input.setEncoding('utf-8');

    // Prompt user to input data in console.
    log.info('password','Nhập mật khẩu bạn muốn mã hóa')

    // When user input data and click enter key.
    standard_input.on('data', function (data) {
        data=data.trim();
        // User input exit.
        if(data == "exit"){
            // Program exit.
            console.log("Tạm biệt bạn.");
            process.exit();
        }else
        {
            var mahoa=encrypt(data);
            // Print user input in console.
            log.info('password','Mật khẩu bạn muốn mã hóa là: '+mahoa)

        }
    });



    function encrypt($string) {
        var message = crypto.AES.encrypt($string, 'ma bi mat').toString();
        return message;
    }