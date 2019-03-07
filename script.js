function add(x, y) {
    return x + y;
}


add(2, 3);

add(2, 3);

add('2', '3');


function addx(x ,y) {
    var result;
    if (typeof x && typeof y) !== 'number') {
        throw new Error('Params must be a number');
    }

    result = x + y;
    if parseInt(result) !== result) {
        result = parseFloat(result.toFixed(1));
    }

    return result;
}