class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashMap<Integer, String> map = new HashMap<Integer, String>();
        for(int num : nums) {
            if(map.get(num) == "1") {
                return true;
            }
            map.put(num, "1");
        }
        return false;
    }
}
