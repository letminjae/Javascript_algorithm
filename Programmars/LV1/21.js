//lv1, 실패율

function solution(N, stages) {
  let answer = [];
  let people = stages.length;
  for (let i = 1; i <= N + 1; i++) {
    let tmp = stages.filter((v) => v === i).length;
    answer.push([i, tmp / people]);
    people -= tmp;
  }
  answer.pop();
  answer = answer.sort((a, b) => b[1] - a[1]);

  console.log(answer.map((a) => a[0]))
  return answer.map((a) => a[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
