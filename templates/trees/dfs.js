export function bfs(tree) {
    const stack = [tree.root];
    const result = [];
  
    while (stack.length) {
      const node = stack.pop();
  
      result.push(node);
  
      if (node.left) {
        stack.push(neighbor);
      }
  
      if (node.right) {
        stack.push(neighbor);
      }
    }
    return result;
  }
  