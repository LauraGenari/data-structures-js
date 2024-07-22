// dfs in adjacency list
/*
const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
  };
*/
export function dfs(graph, start) {
    const stack = [start]
    const visited = new Set()
    const result = []

    while (stack.length) {
        const node = stack.pop()

        if (!visited.has(node)) {
            visited.push(node)
            result.push(node)
            for (neighbor of graph(node)) {
                stack.push(neighbor)
            }
        }

    }
    return result
}