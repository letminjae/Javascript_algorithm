function solution(arr){
    let answer = arr;
    let _answer = arr.reduce((acc,cur) => acc + cur, 0);
    for (let i = 0; i < 8; i++){
        for (let j = i+1; j < 9; j++){
            // if(_answer - (answer[i] + answer[j]) === 100){
            //     answer.splice(j,1)
            //     answer.splice(i,1)
            // }
            console.log(arr[i], arr[j])
        }
    }
    
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
