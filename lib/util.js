/**
 * 位置交换
 */
Array.prototype.sw = function(a, b) {
    let temp = this[a];
    this[a] = this[b];
    this[b] = temp;
}

let util = {
    /**
     * 生成随机数组
     * @param {Number} size 数组大小
     * @param {Number} limit 随机数大小上限
     * @param {Boolen} isUnique 随机数是否唯一
     */
    makeRandomArray: function(size = 10, limit = 100, isUnique = true) {
        let array = [],
            bitMap = 0,
            num;
        for (let i = 0; i < size; i++) {
            num = Math.ceil(Math.random() * limit);
            if (isUnique && ((1 << num | bitMap) == bitMap)) {
                i--;
                continue;
            }
            array.push(num);
            bitMap = 1 << num | bitMap;
        }
        return array;
    },
    /**
     * 生成随机字符串
     * @param {Number} length 长度
     * @param {Boolen} isUnique 字符是否唯一，若为true，则长度不超过26或52
     * @param {Boolen} isSensitive 是否区分大小写
     */
    makeRandomString: function(length = 10, isUnique = false, isSensitive = false) {
        let list = 'abcdefghijklmnopqrstuvwxyz';
        if (isSensitive) {
            list += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (isUnique) {
            if (isSensitive && length > 52) {
                length = 52;
            } else if (length > 26) {
                length = 26;
            }
        }
        let i = 0,
            str = '',
            map = {},
            index, limit = list.length;
        while (i < length) {
            index = Math.ceil(Math.random() * limit)  % limit;
            if(isUnique && map[index]){
                continue;
            }
            map[index] = true;
            str += list.charAt(index);
            i++;
        }
        return str;
    }
};

module.exports = util;