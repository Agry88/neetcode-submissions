class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // this num, currentIndex
        const numMap = new Map();
        for(let i = 0; i<numbers.length;i++) {
            const num = numbers[i];
            const expect = target-num;
            const expectResultFromMap = numMap.get(expect);
            if(expectResultFromMap != null) {
                return [expectResultFromMap+1, i+1];
            };
            numMap.set(num, i);
        };
    }
}
