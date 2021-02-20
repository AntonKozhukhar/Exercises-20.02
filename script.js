'use strict'

/* 1. Создать два массива: countries – с названием стран, и population – с населением этих стран. Вывести название страны и ее население  */

let countries = ['Ukr', 'USA', 'Rus'];
let population = [100, 200, 300];

let showElement = document.getElementById('test')
for(let i = 0; i < 3; i++) {
    showElement.innerHTML += `
    <div>${countries[i]}: ${population[i]}</div>
    `
}

/* 2. Отсортировать массив, заполненный случайными числами, по возрастанию. Для сортировки использовать метод "пузырька". Вывести на экран массив в исходном и отсортированном виде. */

let arr = [1, 6, 8, 0, 9, 5];
let count = 1;

while(count) {
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            count++;
        }
    }
}
console.log(arr);

