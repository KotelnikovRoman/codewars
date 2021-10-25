function multiTable(number) {
    let multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let table = '';
    let str = '';
    for (i in multipliers) {
        str = multipliers[i]  + ' * ' + number + ' = ' + number * multipliers[i];
        if (multipliers[i] != 10) {
            str += '\n';
        }
        table += str;
    }
    return table;
}

const multiTable2 = (number) => {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number} ${i < 10 ? '\n' : ''}`;
    }
    return table;
}

function multiTable3(n) {
    return [...Array(10)].map((_,i) => `${i+1} * ${n} = ${n*i+n}`).join('\n');
}

function multiTable4(n) {
    let table = '';
    for(let i = 1; i <= 10; i++) {
        table += `${i} * ${n} = ${i * n}\n`;
    }
    return table.slice(0, -1);
}

const multiTable5 = n => ([1,2,3,4,5,6,7,8,9,10].map(i => `${i} * ${n} = ${i*n}`)).join('\n');

n = multiTable5(3);
console.log(n);