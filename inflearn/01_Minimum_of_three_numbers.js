function solution(a, b, c) {
  let answer;

  if(a < b){
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer){
    answer = c;
  }

  return answer;
}

console.log(solution(6, 5, 11));

//세 수 중 최솟값을 구하는 형태의 함수
//처음 a와 b를 조건문으로 비교 후, 비교한 a 또는 b와 c를 비교해서 최솟값 도출 
