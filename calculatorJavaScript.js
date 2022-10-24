function display(num){
    result.value+=num   //to add multipil numbers
}
function allClear(){
    result.value=""
}
function evaluateExp(){
    exp=result.value
    res=eval(exp)
    result.value=res
}
function removeElement(){
    currentExpression=result.value
    result.value=currentExpression.slice(0,-1)

}