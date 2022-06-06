function solution(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++){
    let tmp = arr[i];
    let j;
    for(j = i - 1; j>=0; j--){
      if(arr[j] > tmp) arr[j+1] = arr[j]
      else break
    }
    arr[j+1] = tmp;
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < answer.length; j++) {
//       if (arr[i] < answer[j]) {
//         answer.splice(j, 0, arr[i]);
//         break;
//       }
//     }
//   }
//   return answer;
// }

// let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr));

// 선택정렬
// i = 1부터 시작, j = i - 1 부터 0까지 돈다. (j가 i 바로 앞에 있는 값들을 다 탐색)
// tmp 변수를 설정, j가 돌기전 arr[i]의 값을 저장
// arr[j]가 tmp보다 크다? 복사 => 그 후 j for문 빠져나와서 tmp값을 바꿔줌
