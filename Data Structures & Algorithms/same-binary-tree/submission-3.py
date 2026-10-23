# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        # given to a function with a node, check if the value is  the same, then, check it's children
        if p == None and q == None:
            return True

        if (p == None and q != None) or (p != None and q == None):
            return False

        if p.val != q.val:
            return False
        
        l, r = True, True
        if p.left or q.left:
            if not q.left or not q.left:
                return False
            l = self.isSameTree(p.left, q.left)
            if not l:
                return False
        if p.right or q.right:
            if not q.right or not p.right:
                return False
            r = self.isSameTree(p.right, q.right)
            if not r:
                return False

        return True