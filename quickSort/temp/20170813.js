let util = require('../../lib/util');

main();

function main() {
    let array = util.makeRandomArray();
    console.log(array);
    qs(array, 0, array.length);
    console.log(array);
}

function qs(array, i, j) {
    if (i >= j) {
        return;
    }
    let x = i,
        y = j,
        flag = true;
    while (i != j) {
        if (flag) {
            if (array[j] < array[x]) {
                flag = false;
            } else {
                j--;
            }

        } else {
            if (array[i] > array[x]) {
                array.sw(i, j);
                flag = true;
            } else {
                i++;
            }
        }
    }
    array.sw(x, i);
    qs(array, x, i - 1);
    qs(array, i + 1, y);
}