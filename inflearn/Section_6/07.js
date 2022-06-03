function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");
  for (let x of plan) {
    if (queue.includes(x)) { // 큐안에 x가 있다면?
      if (x !== queue.shift()) return "NO"; // 큐 안에 요소를 빼낸 값(shift한 값)이 x와 다르면 NO
      // 즉, 큐의 요소(CBA)가 plan의 요소(BCA)와 일치하지않는다면 NO 라는 의미
    }
  }
  if (queue.length > 0) return "NO"; // 큐가 비워져있지 않다면 NO
  return answer;
}

let a = "CBA";
let b = "BCDGAE";
console.log(solution(a, b));
