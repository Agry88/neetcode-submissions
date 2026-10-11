class Solution:    
    def minWindow(self, s: str, t: str) -> str:
        l, r = 0, 0
        maps = {};
        missing = len(t)

        for c in t:
            if c in maps:
                maps[c] += 1
            else:
                maps[c] = 1

        result = None

        while r < len(s):
            w = s[r];
            
            if w in maps:
                if maps[w] > 0:
                    missing -= 1
                maps[w] -= 1

            while l <= r and missing == 0:
                result = s[l: r +1 ] if result is None or len(s[l: r + 1]) < len(result) else result
                left_char = s[l]
                if left_char in maps:
                    maps[left_char] += 1
                    if maps[left_char] > 0:
                        missing += 1
                l += 1
            r += 1;
        
        return result if result is not None else ""
            
            

        