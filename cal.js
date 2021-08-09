
var number1 ="0";
var number2 ;
var operation ="" ;
var afterOper = false;
var count = false;
var width;
const tags = [
    document.getElementById("plus").addEventListener("click",()=>add()),
    document.getElementById("seven").addEventListener("click",()=>concat(7)),
    document.getElementById("four").addEventListener("click",()=>concat(4)),
    document.getElementById("one").addEventListener("click",()=>concat(1)),
    document.getElementById("zero").addEventListener("click",()=>concat(0)),
    document.getElementById("minus").addEventListener("click",()=>sub()),
    document.getElementById("eight").addEventListener("click",()=>concat(8)),
    document.getElementById("five").addEventListener("click",()=>concat(5)),
    document.getElementById("two").addEventListener("click",()=>concat(2)),
    document.getElementById("float").addEventListener("click",()=>{if(!count){concat(".");count = true;}}),
    document.getElementById("mul").addEventListener("click",()=>mul()),
    document.getElementById("nine").addEventListener("click",()=>concat(9)),
    document.getElementById("six").addEventListener("click",()=>concat(6)),
    document.getElementById("three").addEventListener("click",()=>concat(3)),
    document.getElementById("reset").addEventListener("click",()=>clear()),
    document.getElementById("div").addEventListener("click",()=>div()),
    document.getElementById("equal").addEventListener("click",()=>equal()),
   // window.addEventListener("resize",func)
]
function concat(value){
    document.get
    if(afterOper){ 

        if(value=="."){
            number1+=value.toString();
        }
        else{
            number1="";
            number1+=value.toString();
        }
        afterOper = false;
        count = false;
     
    }
    else {
        if(number1=="0"){
            if(value=="."){
                number1+=value.toString();
            }
            else{
                number1="";
                number1+=value.toString();
            }
         
            
        }
        else{
            number1+=value.toString();
        }
    }
    console.log(number1,number1.length);
    changeFontSize();
    document.getElementById("display").innerText= number1;
}
function defaults(){
    console.log("operator");
}
function clear(){
    number1="0";
    number2="0";
    changeFontSize();
    document.getElementById("display").innerText= number1;
    operation="";
    afterOper = true;
    count = false;
}
function add(){
    if(!afterOper)
   {
    auto();
    afterOper = true;
    number2 = number1;
    number1="0";
    operation = "add";    
   }
}
function sub(){
    if(!afterOper){
        auto();
        afterOper = true;
        number2 = number1;
        number1="0";
        operation = "sub";
    }  
}
function mul(){
    if(!afterOper){
        auto();
        afterOper = true;
        number2 = number1;
        number1="0";
        operation = "mul";
    }  
}
function div(){
    if(!afterOper){
        auto();
        afterOper = true;
        number2 = number1;
        number1="0";
        operation = "div";
    }
}
function equal(){
    if(!afterOper){
        switch(operation){
            case "add":
                number1 = (Number(number1) +Number(number2)).toString();
            break;
            case "sub":
                number1 = number2-number1;
            break;
            case "mul":
                number1 = number1*number2;
            break;
            case "div":
                number1 = number2/number1;
            break;
            default:
                console.log("no operations pending");
        }
        operation = "";
        changeFontSize();
        document.getElementById("display").innerText= number1;
        number2="0";
        count = true;
    }
}
function auto(){
    if(operation!="")
       equal();
}
function func(){
  width = document.querySelector("#b").clientWidth;
  document.getElementById("firstdiv").style.marginLeft = `${(width-300)/2}px`;
  document.getElementById("secdiv").style.marginLeft = `${(width-300)/2}px`;
  console.log(width);
}
function changeFontSize(){
    if((296/number1.length)<25)
    document.getElementById("display").style.fontSize=`${296/number1.length}px`;
    else
    document.getElementById("display").style.fontSize="25px";
}
//window.onload = func;

