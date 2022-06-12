function solution(n) {
  let answer = "";
  function DFS(v) {
    if(v > 7) return;
    else{
      // console.log(v); 전위순회 출력
      DFS(v*2);
      // console.log(v); 중위순회 출력
      DFS(v*2+1);
      // console.log(v); 후위순회 출력
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));

//이진트리 순회 (깊이 우선 탐색)
//이진트리 전위순회 후위순회 연습

//트리 값 구하는 법
//부모의 왼쪽 자식 = 부모*2
//부모의 오른쪽 자식 = 부모*2+1

//전위순회? 부모부터 시작 맨왼쪽 => 오른쪽 순 출력
//중위순회? 왼쪽자식의여부부터 시작 부모 중간출력 오른쪽자식 마지막 출력
//후위순회? 왼쪽자식의여부부터 시작 오른쪽자식의여부 출력 부모가 마지막으로 출력