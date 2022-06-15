function solution(n, m) {
  let answer = [];
  let arr = Array.from({length: m}, () => 0);
  function DFS(L){
    if(L===m){
      answer.push(arr.slice());
    }else{
      for(let i = 1; i <=n; i++){
        arr[L] = i;
        DFS(L+1)
      }
    }
  }
  DFS(0)
  return answer;
}

console.log(solution(3, 2));
