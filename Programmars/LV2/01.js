//lv2, 위장

function solution(clothes) {
  let answer = 1;
  let map = new Map();

  for (let x of clothes) {
    if (map.has(x[1])) {
      map.set(x[1], map.get(x[1]) + 1);
    } else {
      map.set(x[1], 1);
    }
  }

  for (let v of map.values()) {
    answer *= v + 1;
  }

  return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
