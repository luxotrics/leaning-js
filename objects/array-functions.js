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


//Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
// который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
var arrayOne = [1, 2, 3, 4, 5];


function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr.unshift(arr[arr.length - i]);
        arr.pop();
        console.log(arr);
    }
    return arr;
}

//console.log(reverseArrayInPlace(arrayOne));

function reverseArrayInPlaceA(arr) {
    var i = 1;
    do {
        var b = arr[arr.length - i];
        arr.unshift(b);
        arr.pop();
        i++;
        console.log(arr);
    } while (i < arr.length);

    return arr;
}

reverseArrayInPlaceA(arrayOne);