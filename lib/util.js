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
    }
};

module.exports = util;