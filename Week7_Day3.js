let fs = require('fs');
fs.readFile('https://github.com/devtlv/Right-Left_Week7JS/blob/main/RightLeft.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)        
    }
    console.log(data);
});

let x = String(data);
let length = x.length;
console.log(length); 