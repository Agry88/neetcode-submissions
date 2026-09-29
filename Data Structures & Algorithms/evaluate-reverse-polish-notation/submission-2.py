class Solution:
    def isCalculationSign(self, ch: str) -> bool:
        return ch == '+' or ch == '-' or ch == '*' or ch == '/'

    def evalRPN(self, tokens: List[str]) -> int:
        storage_token = [];

        for token in tokens:
            if self.isCalculationSign(token):
                right = storage_token.pop()
                left = storage_token.pop()
                result: int = 0
                if token == "+":
                    result = left + right
                if token == "-":
                    result = left - right
                if token == "*":
                    result = left * right
                if token == "/":
                    result = int(left / right)
                storage_token.append(result)
            else:
                storage_token.append(int(token));         

        return storage_token[0];