class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        array = []; # position, time
        for i in range(len(position)):
            time = (target - position[i]) / speed[i]
            array.append([position[i], time])
        array.sort(reverse=True);

        stack = [];

        for index, item in enumerate(array):
            stack.append(item)

            if stack and len(stack) >= 2 and stack[-1][1] <= stack[-2][1]:
                stack.pop()
        return len(stack)