function isPrime(num) { //소수인지 알아보는 함수
    if(num === 1) return false;
    for(let i = 2; i <= parseInt(Math.sqrt(num)); i++){
        if(num%i === 0) return false;
    }
    return true;
}

function solution(arr) {
    let answer = [];
    for(let x of arr){
        let res = 0; // 뒤집은 결과값
        while(x){ // 숫자가 뒤집어지고 난 후 break
            let t = x%10; // x의 일의 자리수
            res = res*10 + t; 
            x = parseInt(x/10); // x에서 일의 자리 숫자를 뺀 숫자 ex) 307이면 x는 30이다.
        }

        // while을 쓰지않고 메소드로 한다면?
        // let res = Number(x.toString().split('').reverse().join(''));
        if(isPrime(res)){
            answer.push(res);
        }
    }
    return answer
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr))

//소수 판별법
//어떤 수 num의 양의 제곱근 이하의 수들로 num을 나눠서 한 번이라도 나누어떨어지면 합성수, 아니면 소수