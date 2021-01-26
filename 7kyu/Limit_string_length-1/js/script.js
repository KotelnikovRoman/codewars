//my code
function solution(string, limit) {
    if (string.length <= limit) {
        return string;
    }
    else {
        return string.slice(0, limit) + "...";
    }
}