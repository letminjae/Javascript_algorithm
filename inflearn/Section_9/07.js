function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];
  
  function DFS(x, y) {
    // 좌표로 생각하고 x,y로 인수잡자
    board[x][y] = 0; //이미 방문한 1로 표기된 섬지역을 0으로 지움
    for (let k = 0; k < 8; k++) {
      let nx = x + dx[k]; //가로축 좌표
      let ny = y + dy[k]; //세로축 좌표
      //경계선 예외처리
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; i < n; j++) {
      if (board[i][j] === 1) {
        //섬 발견
        answer++;
        DFS(i, j);
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
