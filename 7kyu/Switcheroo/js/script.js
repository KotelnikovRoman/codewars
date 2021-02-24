function switcheroo(x) {
    var txt = "";
    if (!x) return 0;

    for (l of x) {
        if (l == "b") {
            l = "a";
        }
        else if (l == "a") {
            l = "b";
        }
        else {
            l = "c";
        }
        txt += l;
    }

    return txt;
}

//codewars
switcheroo2 = x => x.replace(/[ab]/g, x => x == "a" ? "b" : "a");

function switcheroo3(x) {
    return x.split('').map(function (e) {
        if (e == 'b') return 'a';
        if (e == 'a') return 'b';
        if (e == 'c') return 'c';
    }).join('');
}

function switcheroo4(x) {
    return x.replace(
        /[ab]/g,
        function (e) {
            return e == 'a' ? 'b' : 'a';
        }
    );
}

function switcheroo5(x) {
    return [...x].map(v => v == 'a' ? 'b' : v == 'b' ? 'a' : v).join('');
}

switcheroo6 = x => x.replace(/./g, x => 'abc'['bac'.indexOf(x)]);

function switcheroo7(x) {
    return x.split('').map(item => {
        switch (item) {
            case 'a': return 'b';
            case 'b': return 'a';
            default: return item;
        }
    }).join('');
}

document.write(switcheroo7("aabcab"));