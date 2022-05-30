function solution(s) {
  // 카운트로 구현했을때
  // const arr = [...s]
  // let answer;
  // let countLeft = 0;
  // let countRight = 0;
  // for(let i = 0; i< arr.length; i++){
  //   if(arr[i] === '(') countLeft++;
  //   if(arr[i] === ')') countRight++;
  // }
  // if(countLeft === countRight){
  //   return answer = "YES";
  // } else {
  //   return answer = "NO";
  // }

  // 스택으로 구현했을때 : 여는 괄호 만나면 push, 닫는 괄호 만나면 pop, stack이 비면 YES
  let answer = "YES";
  let stack = [];
  for (let x of s){
    if(x === '(') stack.push(x);
    else {
      if(stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if(stack.length > 0) return "NO";
  return answer;
}

let a = "(()(()))(()";
console.log(solution(a));
