function solution1(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1; // 미스났다면 pos는 -1
    // 미스인지 히트인지??
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i; // x라는 값이 있으면 히트된 것 pos는 인덱스 값
    //미스일 경우? 제일 뒤에서 부터 땡긴다
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    //히트일 경우?
    else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

let arr1 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution1(5, arr1));

function solution2(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) { //미스일 경우
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else { //히트일 경우
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
}

let arr2 = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr2));
