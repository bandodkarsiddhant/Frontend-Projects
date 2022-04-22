// ========================= Navbar Dropdown ===========================

// ================================ Domains ================================

let d=document.querySelector(".domain1");
document.querySelector("#a1").addEventListener("click",(e)=>{
    e.stopPropagation();
    d.classList.toggle("domain1-scale1");
})

// ======== for clicking anywhere on the body and going back ===============

document.body.addEventListener("click",()=>{
    if(d.classList.contains("domain1-scale1"))
    {
        d.classList.toggle("domain1-scale1")
    }
}

)

// ===========================================================================

// ===================== carousel =================================

let pre_btn=document.getElementById("previous-btn");
let next_btn=document.getElementById("next-btn");
document.querySelector(".carousel-wrapper").style.transform="translate(0%)";
pre_btn.addEventListener("click",()=>{  

    // let count=10
    let wrapper=document.querySelector(".carousel-wrapper");

    let  transformStyle=wrapper.style.transform;
    if(transformStyle=="translate(0%)" || transformStyle=="")   {
        pre_btn.style.color="grey";
        pre_btn.style.border="2px solid grey";
        next_btn.style.color="black";
        next_btn.style.border="2px solid black";
        return;
    } 
    let words=transformStyle.split("");
    let count=0;
let result="";
for(let i of words){
    if(i=='('){
        // console.log("working");
        count++;
    }
    if(i=='%'){
        break;
    }
    if(count>0 && i!='('){
        console.log(i);
        result+=i;
    }
    console.log(count);
    // console.log("loop count is"+ typeOf(i);
}
console.log(result);
result=Number(result)+11;
// if(result<60) return;


console.log(wrapper.style.transform=`translate(${result}%)`);  
})

next_btn.addEventListener("click",()=>{
    // let count=10
    let wrapper=document.querySelector(".carousel-wrapper");
    let  transformStyle=wrapper.style.transform;
    // let translateX =(transformStyle.replace(/[^\d.]/g,''));
    // console.log(translateX);
    let words=transformStyle.split("");
    let count=0;
let result="";
for(let i of words){
    if(i=='('){
        console.log("working");
        count++;
    }
    if(i=='%'){
        break;
    }
    if(count>0 && i!='('){
        console.log(i);
        result+=i;
    }
    console.log(count);
    // console.log("loop count is"+ typeOf(i);
}
console.log(result);
result=Number(result)-11;
if(result<-70) {
    next_btn.style.color="grey";
    next_btn.style.border="2px solid grey";
    pre_btn.style.color="black";
    pre_btn.style.border="2px solid black";
    return;
}
console.log(wrapper.style.transform=`translate(${result}%)`); 

})


// =================================================================

// ============== dhoni embedded video ===========================


document.querySelector(".Ad-video-sec").addEventListener("click",()=>{
    document.querySelector(".iframe-container").classList.toggle("iframe-js");
    
    // document.body.style.position="fixed";Ad-video-sec;security-sec-wrapper
    // document.body.style.overflowY="hidden";
    document.body.classList.toggle("bodyOverflow");
    
})

// ================================================

// ========== Accordians ===================

// ========== Accordian1 ====================


function myClick(){

    document.getElementById("accordian1").classList.toggle("acc1")
}

// ===========================================================================

// =============== accordion ============================

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}