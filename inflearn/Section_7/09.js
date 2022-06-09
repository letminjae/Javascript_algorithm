function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let T_line = [];

  for (let x of times) { // 온시간과 간시간을 분리해야함 *주의* 문제에 간시간에는 사람이없다는것 명심!
    T_line.push([x[0], "s"]);
    T_line.push([x[1], "e"]);
  }

  T_line.sort((a, b) => {
    if (a[0] === b[0])
      return (
        a[1].charCodeAt() - b[1].charCodeAt()
      ); // x의 값이 같다면, y값에 따라 오름차순해라(아스키코드 상 e(간시간)부터 먼저)
    else return a[0] - b[0]; // x의 값이 같지않다면, x값에 따라 오름차순해라
  });

  console.log(T_line); // 타임라인을 쭉 오름차순으로 

  let cnt = 0;

  for (let x of T_line) {
    if (x[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
