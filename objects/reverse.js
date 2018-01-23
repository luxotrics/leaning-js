// reverseArray
//получает массив как аргумент и выдаёт новый массив,
// с обратным порядком элементов

var array = [1, 4, 5, 12, 33];

function reverseArray(arr) {
    var arrayReverse = [];

    for (i = 0; i < arr.length;) {
        console.log(arr.pop());
    }
}

console.log(reverseArray(array));