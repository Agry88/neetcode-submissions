class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        ans: List[List[int]] = [];
        for i in range(len(nums)):
            if(i>0 and nums[i] == nums[i-1]):
                continue
            l, r = i+1, len(nums) - 1
            while(l < r):
                sum = nums[l] + nums[i] + nums[r];
                if(sum < 0):
                    l+=1;
                elif(sum > 0):
                    r-=1;
                else:
                    ans.append([nums[i], nums[l], nums[r]])
                    l += 1
                    r -= 1

                    while(l < len(nums) -1 and nums[l] == nums[l-1]):
                        l+=1;
                    
                    while(r > 0 and nums[r] == nums[r+1]):
                        r-=1;

        return ans