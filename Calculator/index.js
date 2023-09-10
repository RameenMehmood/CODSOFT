let string="";

let buttons=document.querySelectorAll(".buttons");
// convert them into array 
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{ //add an event listener
        console.log(e.target) 
        if(e.target.innerHTML=="="){

          console.log("String to be evaluated:", string);
      string=eval(string);
      document.querySelector('input').value=string; 
        }
        else if(e.target.innerHTML=="C"){

      string=""
      document.querySelector('input').value=string; 
        }
        else {
        string= string + e.target.innerHTML; 
        document.querySelector('input').value=string;  
        }
    })
})