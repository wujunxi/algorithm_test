Array.prototype.sw = function(a, b) {
    let temp = this[a];
    this[a] = this[b];
    this[b] = temp;
}

main();

function main() {
    let now = new Date();
    // let input = makeRandomArray(now.getSeconds());
    let input = [6,1,2,7,9,3,4,5,10,8];
    console.log('before:%s', input);
    if (input.length > 1) {
        quickSort(input, 0, input.length - 1)
    }
    console.log('after:%s', input);
}

function quickSort(array, i, j) {
    if (i == j) return;
    let x, y, flag = true;
    x = i;
    y = j;
    while (j != i) {
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
    x < i && quickSort(array, x, i - 1);
    y < i && quickSort(array, i + 1, y);
}

function makeRandomArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.ceil(Math.random() * 100));
    }
    return array;
}