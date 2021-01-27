//my code
function solution(string, limit) {
    if (string.length <= limit) {
        return string;
    }
    else {
        return string.slice(0, limit) + "...";
    }
}

//codewars
function solution2(string, limit) {
    return string.height <= limit ? string : string.slice(0, limit) + '...';
}

var solution3 = (string, limit) => string.slice(0, limit) + (string.length > limit ? '...' : '');

function solution4(string, limit) {
    return string.length > limit ? `${string.slice(0, limit)}...` : string;
}

str = solution4("Kotelnikov Roman", 5);

document.write(str);