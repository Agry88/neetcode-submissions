# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def findDepth(self, node: Optional[TreeNode], depth: int) -> int:
        l, r = 0, 0

        if node.left:
            l = self.findDepth(node.left, depth+1)
        if node.right:
            r = self.findDepth(node.right, depth+1)
        
        return max(l, r, depth)

    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # needs a function to pass node and current maxDepth
        if root == None:
            return 0
        return self.findDepth(root, 1)