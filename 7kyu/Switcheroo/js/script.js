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