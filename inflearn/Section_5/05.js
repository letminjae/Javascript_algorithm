function solution(k, arr) {
  let answer,
    sum = 0;
  for(let i = 0; i < k; i++){
    sum += arr[i];
  }
  answer = sum; // 처음 합은 구해준다
  for(let i = k; i < arr.length; i++){
    sum += (arr[i]-arr[i-k]) // 슬라이딩 윈도우
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
