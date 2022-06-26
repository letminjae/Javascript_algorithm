function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // i번째 문제의 스코어 ... 10, 25, 15, 6, 7
    let pt = arr[i][1]; // i번째 문제의 시간 ... 5, 12, 8, 3, 4
    for (let j = m; j >= pt; j--) { // 중복을 피하기위해서는 끝자리부터 반대로 돌아야한다
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
