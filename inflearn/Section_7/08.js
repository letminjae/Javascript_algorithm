function solution(meeting) {
  let answer = 0;
  
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]; // 끝나는 시간이 같다면 시작시간을 오름차순하고
    else return a[1] - b[1]; // 끝나는 시간이 같지 않다면 끝나는시간을 오름차순하자 (예제는 끝나는시간이 다 같지 않으므로 et가 34567로 됨)
  });

  let endtime = 0;
  
  for (let x of meeting) {
    if (x[0] >= endtime) { // 끝나는 시간(y값)이 시작시간과 같거나 크다면 카운팅 후 끝나는시간을 바꿔줌
      answer++;
      endtime = x[1];
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
