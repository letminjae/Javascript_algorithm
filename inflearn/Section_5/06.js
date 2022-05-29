function solution(s) {
  let answer;
//   let votes = Array.from(s)
//   let countedNames = votes.reduce((acc, cur) => {
//       if(cur in acc){
//           acc[cur]++
//       } else {
//           acc[cur] = 1
//       }
//       return acc;
//   }, {})
//   let max = 0;
//   for (let x in countedNames){
//       if (max < countedNames[x]){
//           max = countedNames[x];
//           answer = x;
//       }
//   }

  let hash = new Map(); //key, value가 한쌍으로 된 객체
  for(let x of s){
    if(hash.has(x)) hash.set(x, hash.get(x) + 1); // 해쉬 맵에 x 가 있다면, 해쉬 맵에 x 밸류값 +1
    else hash.set(x, 1);
  }
  // console.log(hash)
  let max = Number.MIN_SAFE_INTEGER;
  for(let [key, val] of hash){
    // console.log(key, val)
    if(val > max){
      max = val;
      answer = key;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
