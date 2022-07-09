//lv1, 약수의 개수와 덧셈

function solution(left, right) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i <= right - left; i++) {
    if (right >= left + i) arr.push(left + i);
  }
  for (let x of arr) {
    let tmp = 0;
    for (let i = 1; i <= x; i++) {
      if (x % i === 0) tmp++;
    }
    if (tmp % 2 === 0) {
      answer += x;
    } else {
      answer -= x;
    }
  }
  return answer;
}

solution(13, 17);
