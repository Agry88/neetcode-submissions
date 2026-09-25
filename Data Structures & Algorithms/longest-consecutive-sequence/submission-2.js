class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let lastNum = null;
        let maxiumCount = 0;
        let currentCount = 0;
        const sortedNums = nums.sort((a,b) => a-b);
        for(let index =0; index<sortedNums.length; index++) {
            const num = sortedNums[index];
            if(lastNum === num) {
                continue;
            };
            if(num === lastNum+1 || lastNum===null) {
                currentCount+=1;
            }
            if(currentCount>maxiumCount) {
                maxiumCount = currentCount;
            }
            if(num !== lastNum + 1) {
                currentCount=1;
            }
            lastNum = num;
        }
        return maxiumCount
    }
}
