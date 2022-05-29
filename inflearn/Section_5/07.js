function solution(str1, str2) {
  let answer = "YES";
  let hash = new Map();
  for (let x of str1) {
    if (hash.has(x)) hash.set(x, hash.get(x) + 1);
    else hash.set(x, 1);
  }
  for (let x of str2) {
    if (!hash.has(x) || hash.get(x) == 0) return "NO"; // 문자열이 없거나, str1에 있는데 str2에 없는 경우
    hash.set(x, hash.get(x) - 1); // 0만들기 위함
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
