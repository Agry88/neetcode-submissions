import string

class Solution:
    def findMost(self, maps: dict[str, int]) -> int:
        most = 0;
        for key in maps.keys():
            if maps[key] > most:
                most = maps[key]

        return most;

    def characterReplacement(self, s: str, k: int) -> int:
        
        l = 0
        maps = {}
        result = 0

        for r, ch in enumerate(s):
            maps[ch] = maps[ch] + 1 if ch in maps else 1;
            most = self.findMost(maps)
            if r - l + 1 - most <= k:
                result = max(r - l + 1, result)
            else:
                maps[s[l]] -= 1
                l += 1
                
        return result