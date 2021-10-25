function sortVowels(s){
    if((typeof s == Number) || (s == undefined) || (typeof s == null)) {
        return '';
    }
    var vowels = ['a', 'o', 'u', 'i', 'e'];
    var text = "";
    for(var i = 0; i < s.length; i++) {
        if(vowels.indexOf(s[i].toLowerCase()) != -1) {
            text += "|" + s[i];
        }
        else if(s[i] == " ") {
            text += " |";
        }
        else {
            text += s[i] + "|";
        }
        if(i < s.length - 1) {
            text += "\n";
        }
    }
    return text;
}

//codewars
const sortVowels2 = s => typeof s !== 'string' ? '' : [...s].map(e => /[aeiou]/i.test(e) ? `|${e}` : `${e}|`).join('\n');

const sortVowels3 = s => typeof s === 'string' && s.split('').map(c => 'aeiou'.includes(c.toLowerCase()) ? '|'+c : c+'|').join('\n') || '';

function sortVowels4(s) {
    if(s !== '' + s) return;
    return s.replace(/./gi,m => (/[uoiea]/i.test(m) ? '|' + m:m + '|') + '\n').slice(0, -1);
}

function sortVowels5(s) {
    if(typeof s !== 'string') return '';
    let arr = [];
    for(let i = 0; i < s.length; i++) {
        if("aeiou".includes(s[i].toLowerCase())) {
            arr.push("|" + s[i]);
        }
        else {
            arr.push(s[i] + "|")
        }
    }
    return arr.join("\n");
}

function sortVowels6(s) {
    if(typeof(s) != 'string') return '';

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    s = s.split("");

    for(let i = 0; i < s.length; i++) {
        if(vowels.indexOf(s[i]) != -1) {
            s[i] = '|' + s[i];
        }
        else {
            s[i] = s[i] + '|';
        }
    }
    return s.join("\n");
}

document.write(sortVowels6("Hi, I is Roman"));