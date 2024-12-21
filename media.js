
let cartlogIn = document.getElementById("stoove");
let cartlogOut = document.getElementById("proverb");
let cartStop = document.getElementById("crosli");
let playCode = document.getElementById("codeOut");



function mediaPlay(){
cartStop.addEventListener("click",()=>{
cartlogIn.style.display = "flex";
playCode.style.display = "none";
}   )
}


mediaPlay()





function mediaRemove(){
    cartlogOut.addEventListener("click",()=>{
    cartlogIn.style.display = "none";
    playCode.style.display = "block";
    }   )
    }


    mediaRemove()