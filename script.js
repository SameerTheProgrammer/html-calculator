let result= document.getElementById("screen");

let calculate=(number)=>{
    result.value+= number ;
   
}
// function calculate(number){
//     result.value+= number;
// }


let Answer=()=>{
    try {
        result.value = eval(result.value)
    } catch (err) {
        alert("Invalid")
    }
}

clr= ()=>{
    result.value="";
}
del= ()=>{
    result.value=result.value.slice(0 , -1);
}

add=()=>{
    result.value+= "+";
}