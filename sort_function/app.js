// const array = [58, 2, 36, 45, 77, 1, 12, 54, 55, 36];

function addNum() {
    let myNums = [];
    for (let i=0; i < 10; i++) {
        const randomNums = Math.floor(Math.random() * 100);
        myNums.push(randomNums)
    }
    return myNums;
}
const array = addNum()

console.log('od min do max')
for (let i = 0; i < array.length; i++){
    for (let index = i; (array[index -1] - array[index]) > 0; index--){
        [array[index -1], array[index]] = [array[index], array[index - 1]];
    }
}
console.log(array)

console.log('od max do min')
for (let i = 0; i < array.length; i++){
    for (let j = i; (array[j] - array[j -1]) > 0; j--){
        [array[j -1], array[j]] = [array[j], array[j - 1]];
    }
}
console.log(array)

// method min do max
console.log('method sort od min do max')
array.sort((a,b) => (a - b));
console.log(array)

// method min do max
console.log('method sort od max do min')
array.sort((a,b) => (b - a));
console.log(array)
