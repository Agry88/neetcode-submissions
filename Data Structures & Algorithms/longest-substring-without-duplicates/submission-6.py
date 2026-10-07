class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        sets = {};
        result = 0;

        for r, c in enumerate(s):
            if c in sets:
                cache = sets.get(c);
                if cache is None:
                    raise ValueError("Just for typecheck")

                l = max(l, cache + 1);
            sets[c] = r
            result = max(result, r - l + 1)
        
        return result