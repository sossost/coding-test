function solution(n, computers) {
  const connected = new Array(n).fill(false)
  
  let network = 0

  function dfs(node) {
    connected[node] = true;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !connected[i]) {
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!connected[i]) {
      dfs(i);
      network++;
    }
  }

  return network;
}
