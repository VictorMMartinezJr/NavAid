const dijkstra = (graph, start, destination) => {
  const distances = {};
  const previous = {};
  const visited = new Set();
  const pQueue = new Map();

  // get all rooms/hallways and set their values to Infinity
  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
    previous[node] = null;
    pQueue.set(node, Infinity);
  });

  // starting position is set to 0
  distances[start] = 0;
  pQueue.set(start, 0);

  while (pQueue.size) {
    // get the lowest distance node and remove it from priority queue
    const currentNode = [...pQueue.entries()].reduce((a, b) =>
      a[1] < b[1] ? a : b
    )[0]; // [0] = we only want name of room/hallway
    pQueue.delete(currentNode);
    visited.add(currentNode);

    if (currentNode === destination) break;

    for (const neighbor of graph[currentNode] || []) {
      if (visited.has(neighbor.node)) continue;

      // Update distance from starting position
      const newDist = distances[currentNode] + neighbor.weight;
      if (newDist < distances[neighbor.node]) {
        distances[neighbor.node] = newDist;
        previous[neighbor.node] = currentNode;
        pQueue.set(neighbor.node, newDist);
      }
    }
  }

  // Reconstruct path back
  const path = [];
  let curr = destination;
  while (curr) {
    path.unshift(curr);
    curr = previous[curr];
  }

  return path;
};

export default dijkstra;
