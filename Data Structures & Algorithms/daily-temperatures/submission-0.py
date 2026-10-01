class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = [] # [i, t]

        for i, t in enumerate(temperatures):
            while stack and t > stack[-1][1]:
                result = stack.pop();
                res[result[0]] = i - result[0]
            stack.append([i, t])
        
        return res