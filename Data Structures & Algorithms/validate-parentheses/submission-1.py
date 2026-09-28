class Solution:
    def isLeftSign(self, a:str) -> bool:
        return a == "[" or a == '(' or a == '{'

    def isSignCorrect(self, a:str, b:str) -> bool:
        match a:
            case "[":
                return b == "]"
            case "(":
                return b == ")"
            case "{":
                return b == "}"
            case _:
                return False


    def isValid(self, s: str) -> bool:
        stack = [];
        for ch in s:
            print(ch)
            if self.isLeftSign(ch):
                stack.append(ch);
            else:
                if(len(stack) == 0):
                    return False
                val = self.isSignCorrect(stack.pop(), ch)
                if(val == False):
                    return False
        return len(stack) == 0