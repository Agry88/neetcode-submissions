class Solution {
    getNumWithinIndex(nums,fromIndex, toIndex) {
        const newNum = nums.slice(fromIndex,toIndex);
        return newNum.reduce((acc, cur) => acc * cur, 1)
    }

    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const answer = [];
        for(let i = 0; i<nums.length;i++){
            const leftNum = this.getNumWithinIndex(nums,0, i);
            const rightNum = this.getNumWithinIndex(nums,i+1, nums.length);
            console.log(i, nums[i], leftNum, rightNum)
            answer[i] = leftNum * rightNum;
        }

        return answer;
    }
}
