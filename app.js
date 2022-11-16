const genarateBtn=document.getElementById("genarateBtn");
const genarateInput=document.getElementById("genarateInput");
const button=document.getElementsByClassName("button");
const calInput=document.getElementById("calInput");
const funs=document.getElementById("fun");
const submit=document.getElementById("submit");
const succes=document.querySelector(".msg-one");
const failed=document.querySelector(".msg-two");

//random function
genarateBtn.addEventListener("click", function(){
genarateInput.value= Math.floor(Math.random()* 9000 +1000);
})

// calculate functiom
for(let i=0 ; i<button.length ; i++){
    let elements = button[i];
    elements.addEventListener("click", function(e){
        let target = e.target.innerText;
        if(target == "C"){
            calInput.value = "";
        }else if(target == "<"){
            calInput.value = calInput.value.slice(0 ,-1) ;
        }
        else{
            if(calInput.value.length<4){
                calInput.value += target;
            }

        }
    })
}

submit.addEventListener("click", function(){
if(genarateInput.value == calInput.value){
succes.style.display="block"
document.getElementById("main").style.display="none"
succes.st
failed.style.display="none";
funs.style.display= "block"
}else{
    failed.style.display="block";
    succes.style.display="none";
    calInput.style.border= "1px solid red"
}
if( calInput.value == ""){
    succes.style.display="none";
    failed.style.display="none";
    funs.style.display= "none"
    document.getElementById("main").style.display="block"
}
})