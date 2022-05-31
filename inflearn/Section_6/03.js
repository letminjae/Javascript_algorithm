function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((row) => { // move 했을 때
    for (let column = 0; column < board.length; column++) {
      if(board[column][row-1] !== 0){ // 빈칸에 인형이 있다면
        let tmp = board[column][row-1];
        board[column][row-1] = 0; // 0으로 만들고
        if(tmp === stack[stack.length - 1]){ // 스택에 추가한 번호와 직전 스택 번호가 같다면 pop 하고 answer 카운트
            stack.pop();
            answer += 2;
        }else {
            stack.push(tmp); // 스택에 추가
        }
        break; // 인형을 하나만 꺼내기위해
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
