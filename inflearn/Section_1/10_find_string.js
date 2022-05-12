function solution(s, t){
    // for문을 이용한 풀이
    // let answer = 0;
    // for(let x of s){
    //     if(x === t){
    //         answer++;
    //     }
    // }

    // split을 이용한 풀이
    let answer = s.split(t).length - 1;
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

