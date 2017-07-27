/**
 * 为了简单起见，假设输入的字符串只包含大写字母。下面举几个例子。
 * （1）如果字符串a是“ABCD”，字符串b是“BAD”，答案是true，因为字符串b中的字母都在字符串a中，或者说b是a的真子集。
 * （2）如果字符串a是“ABCD”，字符串b是“BCE”，答案是false，因为字符串b中的字母E不在字符串a中。
 * （3）如果字符串a是“ABCD”，字符串b是“AA”，答案是true，因为字符串b中的字母包含在字符串a中。
 */

let input1 = 'ABCDA',
    input2 = 'BADBB';

let result = include(input1, input2);

console.log('string 1:%s\nstring 2:%s\n%s', input1, input2, result);

function include(str1, str2) {
    let bv1 = getBitVal(str1),
    bv2 = getBitVal(str2);
    return (bv1 | bv2) == bv1;
}

function getBitVal(str){
    var A = 'A'.charCodeAt(0);
    return str.split('').reduce(function(val,c,i){
        return val | (c.charCodeAt(0) - A);
    },0);
}

