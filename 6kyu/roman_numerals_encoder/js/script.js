function solution(number){
    // convert the number to a roman numeral
    let numbers = "";
    let units = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let tenner = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let thousands = ["M", "MM", "MMM"];
    let roman_numerals = [
        units,
        tenner,
        hundreds,
        thousands
    ];
    let str_number = String(number);
    let N = str_number.length;
    let j = N - 1;

    for(let i = 0; i < N; i++) {
        if(str_number[i] == "1") {
            numbers += roman_numerals[j][0];
        }
        else if(str_number[i] == "2") {
            numbers += roman_numerals[j][1];
        }
        else if(str_number[i] == "3") {
            numbers += roman_numerals[j][2];
        }
        else if(str_number[i] == "4") {
            numbers += roman_numerals[j][3];
        }
        else if(str_number[i] == "5") {
            numbers += roman_numerals[j][4];
        }
        else if(str_number[i] == "6") {
            numbers += roman_numerals[j][5];
        }
        else if(str_number[i] == "7") {
            numbers += roman_numerals[j][6];
        }
        else if(str_number[i] == "8") {
            numbers += roman_numerals[j][7];
        }
        else if(str_number[i] == "9") {
            numbers += roman_numerals[j][8];
        }
        j--;
    }
    return numbers;
}

//codewars
function solution2(number) {
    let roman = {
        M:1000, 
        CM:900, 
        D:500, 
        CD:400, 
        C:100, 
        XC:90, 
        L:50, 
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    };

    let ans = '';
    while(number > 0) {
        for(let a in roman) {
            if(roman[a] <= number) {
                ans += a;
                number -= roman[a];
                break;
            }
        }
    }
    return ans;
}

let n = solution2(357);

document.write(n);