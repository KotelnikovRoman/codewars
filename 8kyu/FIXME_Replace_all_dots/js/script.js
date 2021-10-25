var replaceDots = function(str) {
    var new_str = str.replace(/[.]/gi, '-');
    return new_str;
}

var replaceDots2 = function(str) {
    return str.replace(/[.]/gi, '-');
}

//codewars
var replaceDots3 = function(str) {
    return str.replace(/\./g, '-');
}

const replaceDots4 = (str) => str.replace(/[.]/g, '-');

function replaceDots5(str) {
    let ans = "";
    for(let i = 0; i < str.length; i++) {
        ans += (str[i] !== ".") ? str[i] : "-";
    }
    return ans;
}

const replaceDots6 = str => str.replace(/\./g, '-');

var replaceDots7 = str => str.split('.').join('-');

document.write(replaceDots7("Hi.wor.l.d.123"));