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


