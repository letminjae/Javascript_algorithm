//lv1, 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
    let answer = [];
    
    const correctNumber = lottos.filter((v) => win_nums.includes(v)).length;
    const zeroCnt = lottos.filter((v) => v === 0).length;

    console.log(correctNumber, zeroCnt);

    let min = 7 - correctNumber >= 6 ? 6 : 7 - correctNumber;
    let max = min - zeroCnt < 1 ? 1 : min - zeroCnt;

    answer = [max, min]

    return answer;
}

solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19])