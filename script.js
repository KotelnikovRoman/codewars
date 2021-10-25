const people = [
    {name: 'Vladimir', age: 25, budget: 40000},
    {name: 'Stas', age: 19, budget: 19000},
    {name: 'Roman', age: 34, budget: 45000},
    {name: 'Oleg', age: 20, budget: 20000},
    {name: 'Kiril', age: 40, budget: 90000}
];

//people.forEach(person => console.log(person));

const newPeople = people.map(person => `${person.name} (${person.age * 3})`);
//(_,i) преоб
const numbers = [...Array(10)].map((_,i) => `${i}`).join('\n');
console.log(numbers);