var display=document.getElementById("display");
var buttons=document.getElementsByClassName("button");
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        // alert("click +");
        var value=this.getAttribute('data-value');
        if(value == 'C' || value=="X") {
            display.innerText = null;
        }
        else if(value == '+' || value == '-' || value == "*" || value == "/" || value == "%"){
        
            operator = value;
            operand1 = parseFloat(display.innerText);
            display.innerText = null;
        }
        else if(value =="="){
            if(operator!=null){
                operand2=parseFloat(display.textContent);
                display.innerText=eval(operand1+""+operator+""+operand2);
            }
            else{
                display.innerText="ERROR";
            }
            
        }
        else if(value == '.') {
            if(display.innerText.length && !display.innerText.includes('.') ) {
                display.innerText += value;
            }
        }
        else{
            display.innerText+=value;
        }
    });
}