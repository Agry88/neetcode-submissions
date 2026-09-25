class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hashmap = new HashMap();

        for(int index1 = 0;index1 < nums.length; index1++){
            int num = nums[index1];
            int gap = target - num;
            if(hashmap.containsKey(gap)) {
                int index2 = hashmap.get(gap);
                return new int[] { index2, index1 };
            }
            hashmap.put(num, index1);
        }
        return new int[] {0, 0};
    }
}
