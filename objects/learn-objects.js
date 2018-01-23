function isEmpty(obj) {
    var counter = 0;
    for (var key in schedule) {
        counter++;
    }
    if (counter == 0) {
        return true;
    }
    return false;
}

var schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'Good morning';

console.log(isEmpty(schedule));