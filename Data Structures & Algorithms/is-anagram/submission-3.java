class Solution {
    public boolean isAnagram(String s, String t) {

        if(s.length() != t.length()) {
            return false;
        }

        HashMap<String, Integer> hashmap1 = new HashMap<String,Integer>();
        HashMap<String, Integer> hashmap2 = new HashMap<String,Integer>();
        for(String item : s.split("")) {
            if(hashmap1.containsKey(item)) {
                int value = hashmap1.get(item);
                hashmap1.put(item, value + 1);
            } else {
                hashmap1.put(item, 1);
            }
        }
        for(String item : t.split("")) {
            if(hashmap2.containsKey(item)) {
                int value = hashmap2.get(item);
                hashmap2.put(item, value + 1);
            } else {
                hashmap2.put(item, 1);
            }
        }
        for(String key : hashmap1.keySet()) {
            if(hashmap1.get(key) != hashmap2.get(key)) {
                return false;
            }
        }
        return true;
    }
}
