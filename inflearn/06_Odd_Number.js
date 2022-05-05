function solution(arr){
    let answer=[];
    // const odd = arr.filter((number) => number % 2)

    // answer.push(odd.reduce((acc, cur) => acc + cur))
    // answer.push(Math.min(...odd))

    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let x of arr){
        if(x % 2 === 1){
            sum += x;
            if(x < min){
                min = x;
            }
        }
    }
    answer.push(sum);
    answer.push(min);

    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));