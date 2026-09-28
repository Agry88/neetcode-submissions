class MinStack:

    def __init__(self):
        self._stack: List[int] = [];
        self._minium_stack: List[int] = [];

    def push(self, val: int) -> None:
        if len(self._minium_stack) > 0:
            if val < self._minium_stack[-1]:
                self._minium_stack.append(val);
            else:
                self._minium_stack.append(
                    self._minium_stack[-1]
                );
        else:
            self._minium_stack.append(val);
        self._stack.append(val)
        return None


        
    def pop(self) -> None:
        self._stack.pop()
        self._minium_stack.pop()
        return None

    def top(self) -> int:
        return self._stack[-1];

    def getMin(self) -> int:
        return self._minium_stack[-1]
        
