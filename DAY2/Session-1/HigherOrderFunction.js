function multiply(x){
    return function multiply(y){
        return x*y;
    };
}
let double=multiply(2)
console.log(double(5))
