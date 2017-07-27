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
    let strAr = str.split('');
    let results = strAr.reduce(function(ar, c, i) {
        let subStrAr = [];
        subStrAr = subStrAr.concat(strAr)
        subStrAr.splice(i, 1);
        let subAr = permutation(subStrAr.join(''));
        let temp = subAr.map((s) =>  c + s );
        return ar.concat(temp);
    }, []);
    return results;
}