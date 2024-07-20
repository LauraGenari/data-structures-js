// bfs in adjacency make_list
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
function bfs(graph, start) {
    const queue = [start]
    const visited = new Set()
    const result = []

    while (queue.length) {
        const node = queue.shift()

        if (!visited.has(node)) {
            visited.push(node)
            result.push(node)
            for (neighbor of graph(node)) {
                queue.push(neighbor)
            }
        }

    }
    return result
}