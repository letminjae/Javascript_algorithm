function solution(arr) {
  let answer = arr; // 얕은 복사
  for (let i = 0; i < arr.length - 1; i++) { // 마지막 자리는 비교할 대상이 없기에 탐색 필요 X
    for (let j = 0; j < arr.length - i - 1; j++) { // 뒤쪽에는 정렬이 완료되어가기에 arr.length - i - 1 을 해줌
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

//버블정렬 (이중 for문 이용)
//이웃한 배열을 비교해서 정렬 => arr[j] arr[j+1]을 비교