function solution(arr) {
  let answer = arr; //얕은 복사
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[idx]) idx = j; // 0의 경우, 5 < 13 이기에 idx = 1이 된다. arr[idx] = 5가 되며 이후 for문이 돌고 false 값이 계속나오며 for문 종료 
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 13과 5를 5와 13으로 교체해주면서 answer[0] = 5, answer[1] = 13으로 변경 됨
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 선택정렬 (이중 for 문 이용)
// i가 0일때 j가 1~5를 돔
// i번째에 올 제일 작은 숫자를 j가 탐색해서 i번 위치로 가져오는 것
// idx라는 변수를 하나 생성, 최솟값의 위치를 저장시킴
