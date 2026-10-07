class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        m = set();
        q = [];
        result = 0;
        
        for c in s:
            if c in m:
                result = max(result, len(q))
                while True:
                    w = q.pop(0);
                    m.remove(w);
                    if w == c:
                        break;
            q.append(c);
            m.add(c);
            result = max(result, len(q))

        return result