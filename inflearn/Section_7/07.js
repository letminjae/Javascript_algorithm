function solution(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]; // 비교한 a와 b의 x좌표가 같다면, y좌표를 비교해서 오름차순해라
    else return a[0] - b[0]; // 같지 않다면, x좌표를 오름차순해라
  });
  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));

// a와 b의 [0]은 x좌표
// a와 b의 [1]은 y좌표
