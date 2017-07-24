/**
 * 三步反转
 * 输入“I am a student.”，输出“student. a am I”
 */

 let input = 'I am a student.';

 let ar = input.split(' ');

 let newAr = ar.map(item => item.split('').reverse().join(''));

 let newStr = newAr.join(' ').split('').reverse().join('');

console.log(newStr);

// 以不需要倒置的最小单位切割数据，将切割完的每个数据倒置，接着将每个倒置的最小单位合并成整体再倒置一遍