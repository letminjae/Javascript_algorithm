//lv2, 프린터

function solution(priorities, location) {
  let answer = 0;
  let cnt = 0;
  let myDoc = location;

  while (priorities.length > 0) {
    let searchDoc = priorities.shift();
    // 맨앞의 문서의 우선순위보다 높은 문서가 있다면
    if (priorities.filter((el) => el > searchDoc).length > 0) {
      priorities.push(searchDoc);
    } else {
      // 맨앞의 문서의 우선순위보다 높은 문서가 없다면
      cnt++;
      if (myDoc === 0) {
        return (answer = cnt);
      }
    }
    // 문서를 꺼낼때 마다 myDoc의 위치는 줄어든다
    myDoc--;
    if (myDoc === -1) {
      myDoc = priorities.length - 1;
    }
  }
  return answer;
}

solution2([2, 1, 3, 2], 2);

// 가장 앞의 문서를 불러오기, 우선순위결정
// 우선순위가 제일 높다면 인쇄, cnt++
// 우선순위가 높지않다면, 문서를 맨뒤로 옮기기
// 문서 꺼낼때 내문서 위치 바꾸기

// 다른 사람 풀이
function solution2(priorities, location) {
  var arr = priorities.map((priority, index) => {
      return {
          index: index, priority: priority
      };
  });

  var queue = [];

  while(arr.length > 0) {
      var firstEle = arr.shift();
      var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
      if (hasHighPriority) {
          arr.push(firstEle);
      } else {
          queue.push(firstEle);
      }
  }

  return queue.findIndex(queueEle => queueEle.index === location) + 1;
}