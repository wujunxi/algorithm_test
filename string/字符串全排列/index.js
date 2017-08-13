/**
 * 输入一个字符串，打印出该字符串的所有排列。
 * 例如，输入字符串“abc”，则输出由字符'a','b','c'所能排列出来的
 * 所有字符串“abc”、“acb”、“bac”、“bca”、“cab”和“cba”。
 */

let input = 'abc';

let result = permutation(input);

console.log(result);

function permutation(str) {
    if (str.length == 1) {
        return [str];
    }
    // 把字符串切割成数组
    let strAr = str.split('');
    let results = strAr.reduce(function(ar, c, i) {
        let subStrAr = [];
        subStrAr = subStrAr.concat(strAr)
        // 先取出第i个字符
        subStrAr.splice(i, 1);
        // 对剩下的字符进行全排序（递归）
        let subAr = permutation(subStrAr.join(''));
        // 把取出的字符拼回去获得一种组合
        let temp = subAr.map((s) =>  c + s );
        // 保存组合
        return ar.concat(temp);
    }, []);
    return results;
}

// abc
// 1. abc => a bc cb => abc acb
//    ^
// 2. abc => b ac ca => bac bca
//     ^
// 3. abc => c ab ba => cab cba
//      ^