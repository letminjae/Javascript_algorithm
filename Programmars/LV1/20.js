//lv1, 폰켓몬

function solution(nums) {
  let answer = [];
  let n = nums.length / 2; // 내가 가져갈 포켓몬 수

  for (let i = 0; i < nums.length; i++) {
    if (answer.length < n) {
      if (!answer.includes(nums[i])) {
        answer.push(nums[i]);
      }
    }
  }
  return answer.length;
}

solution([3, 1, 2, 3]);
