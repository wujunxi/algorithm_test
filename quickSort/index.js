let util = require('../lib/util');

let count = 0;

main();

function main() {
    let now = new Date();
    let input = util.makeRandomArray(now.getSeconds());
    // let input = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
    print(input);
    if (input.length > 1) {
        quickSort(input, 0, input.length - 1)
    }
    print(input);
    console.log('array length:%s,move times:%s', input.length, count);
}

function quickSort(array, i, j) {
    if (i >= j) return;
    let x = i,
        y = j,
        flag = true;
    // 左右哨兵向中间移动，先右后左
    while (j != i) {
        if (flag) {
            // 右哨兵找到比基准数小的
            if (array[j] < array[x]) {
                flag = false;
            } else {
                j--;
                count++;
            }
        } else {
            // 左哨兵找到比基准数大的
            if (array[i] > array[x]) {
                // 交换左右哨兵数
                array.sw(i, j);
                print(array);
                flag = true;
            } else {
                i++;
                count++;
            }
        }
    }
    // 交换基准数到两个哨兵相遇位置，此时保证左边比基准数小，右边比基准数大
    array.sw(x, i);
    print(array);
    // 递归排序基准数左右两边数列
    quickSort(array, x, i - 1);
    quickSort(array, i + 1, y);
}

function print(array) {
    console.log(JSON.stringify(array));
}

