class Solution:
    def getWidth(self, aValue: int, aIndex: int,bValue: int, bIndex: int) -> int:
        return min(aValue, bValue) * (bIndex-aIndex)

    def maxArea(self, heights: List[int]) -> int:
        max_value = 0;
        l, r = 0, len(heights) - 1;
        max_l_v = l;
        max_r_v = r;

        while(l < r):
            l_v = heights[l];
            r_v = heights[r];

            value = self.getWidth(l_v, l, r_v, r);
            if(value > max_value):
                max_value = value;
                max_l_v = l_v;
                max_r_v = r_v;

            if(l_v < r_v):
                l+=1;
            else:
                r-=1;

        return max_value