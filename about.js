
let pickPlay = document.getElementById("killons");
let storePlay = document.getElementById("clones");
let removeStore = document.getElementById("memory");




function visualPlay(){
    pickPlay.addEventListener("click",()=>{
 storePlay.style.opacity = 1;
 storePlay.style.color = "black";
 pickPlay.style.opacity = 0;

 
 
    }) 
 };
 
 function quickPlay(){
    removeStore.addEventListener("click",()=>{
       storePlay.style.opacity= 0;
       pickPlay.style.opacity= 1;
       
    
    })
 };

 visualPlay();

 quickPlay();