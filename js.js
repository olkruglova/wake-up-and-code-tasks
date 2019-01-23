/************************************Część 1 ****************************************/
console.log('Część 1');
/*********************task 1*/

function evenNumbers(arr) {
    let newArr = arr.filter(item => item%2 === 0);
    console.log(newArr);
}

evenNumbers([2, 5, 7, 10, 34, 16, 879, 1]);

/*********************task 2*/

function sayHello(person) {
    if (person.name) {
        console.log('Hello, ' + person.name + '!');
    } else {
        console.log('Hello!')
    }
}

sayHello({ name: "Jill", age: 25, hobby: "sports" });

/*****************task 3*/

function randomName(students) {

    let name = students[Math.floor((Math.random()*students.length))];
    console.log(name);
}
randomName(["John", "Bill", "Emma", "Stella", "Rob"]);

/************************************Część 2 ****************************************/

console.log('Część 2');

/*********************task 1*/
function game (arrGame) {
    let res = arrGame[Math.floor((Math.random()*arrGame.length))];
    console.log(res);
    if (res == arrGame[0]) {
        alert('Gracz nr 1 wygrał');
    }
    else if (res == arrGame[1]) {
        alert('Gracz nr 2 wygrał');
    }
    else {
        alert('Gracz nr 3 wygrał');
    }
}

game(['kamień', 'papier', 'nożyce']);

/*********************task 2*/

function bigNumber (a, b, c) {
    if ((typeof a !== 'number') || (typeof b !== 'number') || (typeof c !== 'number')) {
        alert ('Podaj liczbę!');
    }
    let x = Math.max(a, b, c);
    console.log(x);
}
bigNumber(10, 16, 205);
bigNumber(0, 404, 402);

/****************************task 3 */

function words(word){
    let samogloski = ['a', 'ą', 'e', 'ę', 'i', 'o', 'u', 'y', 'o', 'ó'];
    let arrOfWord = word.split('');
    let x, y, n = 0;

    for (x in samogloski) {
        for (y in arrOfWord) {
            if (samogloski[x] == arrOfWord[y]) {
                n += 1;
            }
        }
    }
    console.log('Słowo ' + word + ' zawiera ' + n + ' samogłosek.');
}

words('okno');
words('kształt');
words('samochód');
words('rzeka');
words('ghtnwwwrtmvc');
