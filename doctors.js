
let scrollDocument = document.getElementById("scroll");
let scrollLow = document.getElementById("cardi");
let scrollHigh = document.getElementById("october");








function playClick(){



    scrollDocument.addEventListener("wheel",(evt)=>{
        evt.preventDefault();
        scrollDocument.scrollLeft += evt.deltaY;
        scrollDocument.scrollWidth = 2000 ;
    } );
   scrollHigh.addEventListener("click",()=>{
    scrollDocument.scrollLeft -= 100;
   });
   scrollLow.addEventListener("click",()=>{
    scrollDocument.scrollLeft += 100;
   });
}

playClick()

