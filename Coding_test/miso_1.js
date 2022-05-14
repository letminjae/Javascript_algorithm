function solution(s) {
    // write your code in JavaScript (Node.js 8.9.4)
    let answer = [];
    for(let i = 0; i < s.length; i++){
        let x = s[i];
        let isFound = false;
        for(let j = i+1; j < s.length; j++){
            let y = s[j];
            for(let k = 0; k < Math.max(x.length, y.length); k++){
                if(x[k] == y[k]){
                    answer.push(i);
                    answer.push(j);
                    answer.push(k);
                    isFound = true;
                    break;
                }
            }
            if(isFound) break;
        }
        if(isFound) break;
    }
    return answer;
}

let array = ["zzzz", "ferz", "zdsr", "fgtd"];
console.log(solution(array));