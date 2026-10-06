class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1
        
        while l < r:
            m =  (r+l) // 2

            if m == l or m == r:
                break;

            if nums[l] < nums[m]:
                if target >= nums[l] and target <= nums[m]:
                    r = m
                else:
                    l = m
            else:
                if target >= nums[m] and target <= nums[r]:
                    l = m
                else:
                    r = m;

        if nums[l] == target:
            return l
        else:   
            if nums[r] == target:
                return r
            return -1
                
                