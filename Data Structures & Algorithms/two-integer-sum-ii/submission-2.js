class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lIndex = 0;
        let rIndex = numbers.length - 1;
        while(lIndex < rIndex) {
            const leftNum = numbers[lIndex];
            const rightNum = numbers[rIndex];
            const sum = leftNum+rightNum;
            if(sum > target) {
                rIndex--;
                continue;
            }
            if(sum<target) {
                lIndex++;
                continue;
            }
            return [lIndex+1, rIndex+1]
        }
    }
}
