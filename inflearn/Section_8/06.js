function solution(c, arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    function DFS(L, sum) {
      if (sum > c) return;
      if (L === n) {
        answer = Math.max(answer, sum);
      } else {
        DFS(L + 1, sum + arr[L]);
        DFS(L + 1, sum + arr);
      }
    }
    return answer;
  }
  
  let arr = [81, 58, 42, 33, 61];
  console.log(solution(259, arr));
  