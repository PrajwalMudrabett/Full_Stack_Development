function calculate(a,b,callback){
    let result= a+b;
    callback(result)
}
calculate(10,20,function(output){
    console.log("Result is:",output)
})