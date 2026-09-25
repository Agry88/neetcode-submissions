class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l, r = prices[0], 0;
        i = 0;
        maxProfit = 0;
        
        while i < len(prices):
            p = prices[i];
            if(p < l):
                l = p;
                r = 0;
            
            if(p > r): 
                r = p;

            if(r - l > maxProfit):
                maxProfit = r - l
            i += 1;
            
        return maxProfit