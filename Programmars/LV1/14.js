// lv1, 크레인 인형뽑기 게임

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach(move => {
    for(let i = 0; i< board.length; i++){
      if(board[i][move-1] !== 0){
        let tmp = board[i][move-1];
        board[i][move-1] = 0;
        if(tmp === stack[stack.length-1]){
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
          break;
      }
    }
  })
  console.log(answer)
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);
