
    var letter = document.getElementById("form") ;
    var email = document.getElementById("email")
  




   
 

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

  validate();


 })


  




let validate=()=>{
  
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos =  email.lastIndexOf(".");
    var crop = document.getElementById("cross");
    

    if(atpos < 1){
  
      
        crop.innerHTML="Invalid" ;
        crop.style.color ="red";
        return false;
        
        
  
    }
    else if(dotpos < atpos + 2){
        
        crop.innerHTML="Invalid";
        crop.style.color ="red";
        e.preventDefault()
        return false;
        
    }
    else if(dotpos + 2 >= email.length){
        
        crop.innerHTML="error";
        crop.style.color ="red";
        e.preventDefault();
        return false;
    



}else{
  
    crop.innerHTML="valid email";
    crop.style.color="green";
    alert("submited");



}



}
