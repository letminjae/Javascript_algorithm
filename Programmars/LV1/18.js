//lv1, 3진법 뒤집기

function solution(n) {
  let three = n.toString(3).split("").reverse().join("");
  return parseInt(three, 3);
}

solution(45);
