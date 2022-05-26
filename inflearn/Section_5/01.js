function solution(arr1, arr2) {
  // let answer = arr1.concat(arr2).sort((a,b) => a-b); // sort 사용 시 O(nlogn)
  // 투포인터 알고리즘 사용
  // p1, p2 의 변수 생성 => p1 돌면서 탐색, p2 돌면서 탐색
  // p1 한번 for문 돌면 O(n), p2 한번 for문 돌면 O(m) => O(n+m)으로 sort보다 시간복잡도 낮음
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = p2 = 0;
  while(p1<n && p2<m){
      if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]); // 후치연산 => p1이 0이면 0번째 arr1 값 푸쉬된 이후 p1이 1됨
      else answer.push(arr2[p2++])
  }
  while(p1<n) answer.push(arr1[p1++]);
  while(p2<m) answer.push(arr2[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
