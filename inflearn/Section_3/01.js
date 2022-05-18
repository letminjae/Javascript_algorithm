function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
// for문으로 풀 때
//   let n = s.length;
//   for(let i = 0; i < Math.floor(n / 2); i++){
//       if(s[i] !== s[n-i-1]) return "NO"
//   }

// 메서드로 풀 때
  if(s.split('').reverse().join('') !== s) return "NO"
  return answer;
}

let str = "goooG";
console.log(solution(str));
