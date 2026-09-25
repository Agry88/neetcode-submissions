class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        maps = {}; # {val: index}
        i = 0;
        for i in range(len(nums)):
            number = nums[i]
            if target - number in maps:
                return [maps[target - number], i];
            maps[number] = i;
            i+=1;