//Первая получает массив как аргумент и выдаёт новый массив,
// с обратным порядком элементов

var array = [2, 55, 34, 23];

function reverseArray(arr) {
    var arrReverseClone = [];
    for (i = 0; i < arr.length;) {
        var boofer = arr.pop();
        arrReverseClone.push(boofer);
    }
    console.log(arrReverseClone);
}

reverseArray(array);


//Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
// который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
var arrayOne = [1, 2, 3, 4, 5];
var arrayLength = arrayOne.length;

function reverseArrayInPlace(arr, arrLength) {

    var a = 0;
    for (var i = 0; i < arrLength; i++) {
        arr.unshift(arr[a]);
        a += 2;
    }
    arr.splice(arrayLength, arrayLength);
    return arr;
}
//Очи кривой код, макака-чан код -_-
console.log(reverseArrayInPlace(arrayOne, arrayOne.length));