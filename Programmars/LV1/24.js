//lv1, 키패드누르기

function findKey(key) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (keypad[i][j] === key) {
        return [i, j];
      }
    }
  }
}

function solution(numbers, hand) {
  let answer = "";
  let left = "*";
  let right = "#";
  for (let x of numbers) {
    if (x === 1 || x === 4 || x === 7) {
      answer += "L";
      left = x;
    } else if (x === 3 || x === 6 || x === 9) {
      answer += "R";
      right = x - 2;
    } else {
      const r = findKey(right);
      const l = findKey(left);
      const middle = findKey(x);
      let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
      let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
      if (rr === ll) {
        // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
        hand === "right"
          ? ((right = x), (answer += "R"))
          : ((left = x), (answer += "L"));
      } else if (rr > ll) {
        // 오른손의 거리가 더 멀다면
        answer += "L";
        left = x;
      } else {
        // 왼손의 거리가 더 멀다면
        answer += "R";
        right = x;
      }
    }
  }
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
