const input= document.querySelector('#text');
const buttons = document.querySelectorAll('.numbers');

let screenValue="";
for(let item of buttons){
    item.addEventListener("click",(e)=>{
          buttonText = e.target.innerText
          if(buttonText == "X"){
            buttonText="*";
            screenValue+=buttonText
            input.value=screenValue;
          }
          else if(buttonText =="C"){
            screenValue="";
            input.value=screenValue;
          }
          else if(buttonText =="="){
           input.value = eval(screenValue);
           if(input.value=="undefined"){
            input.value = ""
           }
           screenValue=input.value;
          
           
          }
          else{
            screenValue+=buttonText
            input.value=screenValue;
          }
 
    })
}




  