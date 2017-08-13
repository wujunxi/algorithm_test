let util = require('../lib/util');

main();

function main() {
    // let array = util.makeRandomArray();
    let array = [6, 28, 15, 66, 22, 96, 11, 17, 30, 50];
    console.log(array);
    qs(array, 0, array.length-1);
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
        if(flag){
            if (array[i] > array[y]) {
                flag = false;
            }else{
                i++;
            }
        }else{
            if (array[j] < array[y]) {
                array.sw(i,j);
                flag = true;
            }else{
                j--;
            }
        }
    }
    array.sw(y, i);
    qs(array, x, i - 1);
    qs(array, i + 1, y);
}