export function bfs(tree) {
  const queue = [tree.root];
  const result = [];

  while (queue.length) {
    const node = queue.shift();

    result.push(node);

    if (node.left) {
      queue.push(neighbor);
    }

    if (node.right) {
      queue.push(neighbor);
    }
  }
  return result;
}
