//Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let positives = 0;

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > 0) {
        sum += num;
        positives++;
    }
}

console.log("Сума позитивних чисел:", sum);
console.log("Кількість позитивних чисел:", positives);

//Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
let minElementIndex = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] < minElement) {
        minElement = arr[i];
        minElementIndex = i;
    }
}

console.log("Мінімальний елемент:", minElement);
console.log("Порядковий номер мінімального елемента:", minElementIndex);

//Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
let maxElementIndex = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] > maxElement){
        maxElement = arr[i];
        maxElementIndex = i;
    }
}

console.log("Максимальний елемент:", maxElement);
console.log("Порядковий номер максимальний елемента:", maxElementIndex);

//Визначити кількість негативних елементів.
let countOfNegatives = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
        countOfNegatives++;
    }
}
console.log("Кількість негативних елементів:", countOfNegatives);

//Знайти кількість непарних позитивних елементів.
let countOfOddPositives = 0;

for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] % 2 !== 0){
        countOfOddPositives++;
    }
}
console.log("Кількість непарних позитивних елементів:", countOfOddPositives);

//Знайти кількість парних позитивних елементів.
let countOfEvenPositives = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        countOfEvenPositives++;
    }
}

console.log("Кількість парних позитивних елементів:", countOfEvenPositives);

//Знайти суму парних позитивних елементів.
let sumOfEvenPositives = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] % 2 === 0){
        sumOfEvenPositives += arr[i];
    }
}
console.log("Сума парних позитивних елементів:", sumOfEvenPositives);

//Знайти суму непарних позитивних елементів.
let sumOfOddPositives = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0 && arr[i] % 2 !== 0){
        sumOfOddPositives += arr[i];
    }
}
console.log("Сума непарних позитивних елементів:", sumOfOddPositives);

//Знайти добуток позитивних елементів.
let productOfPositives = 1;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        productOfPositives *= arr[i];
    }
}

console.log("Добуток позитивних елементів:", productOfPositives);

//Знайти найбільший серед елементів масиву, ост альні обнулити.
let bigElement = Math.max(...arr);

for(let i = 0; i < arr.length; i++){
    if(arr[i] !== bigElement){
        arr[i] = 0;
    }
}
console.log("Масив після обнулення всіх елементів, крім найбільшого:", arr);
