function squareSum(numbers){
    console.log(numbers);
    let number = 0;
    for(let i = 0; i < numbers.length; i++) {
        let elem = numbers[i] * numbers[i];
        number += elem;
    }
    return number;
}

function squareSum2(numbers) {
    return numbers.reduce((sum, n) => {
        return (n * n) + sum;
    }, 0);
};

function squareSum3(numbers) {
    return numbers.reduce((sum, n) => sum + (n * n), 0);
}

function squareSum4(numbers) {
    let sum = 0;
    numbers.forEach(function(n) {
        sum += n * n;
    });
    return sum;
}


let arr = [2, 5, 3, 2];
document.write(squareSum4(arr));