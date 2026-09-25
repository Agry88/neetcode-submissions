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
        console.log(map)

        const answersWithKey = [];
        for(const [key, value] of map.entries()) {
            console.log(key, value)
            answersWithKey.push({key,value})
        }
        
        answersWithKey.sort((a,b) => {
            if(a.value > b.value){
                return -1;
            }
            if(b.value > a.value) {
                return 1;
            }
            return 0;
        })
        console.log(answersWithKey)
        
        return answersWithKey.slice(0,k).map(item => item.key)
    }
}
