function solution1(arr) {
  let answer = arr;
  for(let i = 0; i < arr.length -1; i++){ // 마지막 자리는 비교할 대상이 없기에 탐색 필요 X
    for(let j = 0; j < arr.length - i - 1; j++){ // 뒤쪽에는 정렬이 완료되어가기에 arr.length - i - 1 을 해줌
      if(arr[j] > 0 && arr[j+1] < 0){
        [arr[j], arr[j+1]]=[arr[j+1], arr[j]];
      }
    }
  }
  return answer;
}

let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution1(arr1));

// function solution2(arr) {
//   let answer = [];
//   for(let x of arr){
//     if(x < 0) answer.push(x);
//   }
//   for(let x of arr){
//     if(x > 0) answer.push(x);
//   }
//   return answer;
// }

// let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution2(arr2));
