/**
 * 输入一个字符串，要求找出字符串中最大子串的长度
 * 如：字符串abcd13agbf，当重复出现某个字符时，算一个子串，比如abcd13a或bcd13agb都是子串。
 */

let util = require('../../lib/util');

main();

function main() {
    let input = util.makeRandomString(20);
    let map = {},
        maxLen = 0;
    input.split('').forEach(function(e, i) {
        if (typeof map[e] != 'undefined') {
            if (i - map[e] > maxLen) {
                maxLen = i - map[e];
                console.log(i, e, maxLen);
            }
        } else {
            map[e] = i;
        }
    });
    console.log(input);
    console.log(maxLen);
}