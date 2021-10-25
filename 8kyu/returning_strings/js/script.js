function greet(name){
    return typeof name == 'string' ? "Hello, " + name + " how are you doing today?" : false;
}

//codewars
function greet2(name) {
    return `Hello ${name} how are you doing today?`;
}

const greet3 = name => `Hello ${name} how are you doing today?`;

function greet4(name) {
    return "Hello <name> how are you doing today?".replace("<name>", name);
}

let text = greet4("Romka");

document.write(text);