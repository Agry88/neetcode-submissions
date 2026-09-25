class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // add hashmap and loop nums to add to hashmap,
        // sort the hashmap key and value (quick sort)
        // based on k to return the value

        const map = new Map();
        for(const num of nums) {
            const val = map.get(num);
            if(val != null) {
                map.set(num, val +1);
            } else {
                map.set(num, 1);
            }
        }

        const bucketArray = new Array(nums.length)

        for(const [key, value] of map.entries()) {
            if(bucketArray[value] != null) {
                bucketArray[value].push(key)
            } else {
                bucketArray[value] = [key];
            }
        }

        const answer = [];

        for(let i = bucketArray.length-1;i > 0; i--) {
            const bucketItems = bucketArray[i];
            if(bucketItems != null) {
                for(const item of bucketItems) {
                    answer.push(item)
                    if(answer.length === k) {
                        return answer
                    }
                }
            }
        }
     }
}
