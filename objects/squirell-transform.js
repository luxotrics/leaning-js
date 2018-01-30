var day1 = {
    squirrel: false,
    events: ["работа", "тронул дерево", "пицца", "пробежка", "телевизор"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

//Получается, что массивы – это разновидность объектов, которые специализируются на хранении последовательностей.
//Поэтому журнал Жака можно представить в виде массива объектов:

var journal = [{
        events: ["работа", "тронул дерево", "пицца", "пробежка", "телевизор"],
        squirrel: false
    },
    {
        events: ["работа ", "мороженое", "цветная капуста", "лазанья", " тронул дерево ", "почистил зубы"],
        squirrel: false
    },
    {
        events: ["выходной", "велик", "перерыв", "арахис", "пивасик"],
        squirrel: true
    },
    /* и так далее... */
];

//Прямая реализация коэфициента фи

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}