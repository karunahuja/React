

function add(a,b){

    let add1=a+b;
    
    return add1;
}
function subtract(a,b){
let sub=a-b;
    
    return sub;
}
function multiply(a,b){
    let multiply1=a*b;
    
    return multiply1;
}
function divide(a,b){

    let div=a/b;
    div=div.toFixed(2);
    return div;
}

export{add,multiply,subtract,divide};