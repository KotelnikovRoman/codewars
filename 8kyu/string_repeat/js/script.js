function repeatStr (n, s) {
    text = "";
    for (var i = 0;i < n;i++) {
        text += s;
    }
    return text;
  }

//codewars
function repeatStr2(n, s) {
      return s.repeat(n);
}

repeatStr3 = (n, s) => s.repeat(n);

const repeatStr4 = function (n, s) {
    return Array(n).join(s) + s;
}

function repeatStr5 (n, s) {
    return n > 1 ? s + repeatStr5(--n, s) : s;
}

document.write(repeatStr4(2, "Proger "));