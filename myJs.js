var areWeReady = false;
setTimeout(function(){
    areWeReady = true;
    var my_header = document.getElementsByClassName("my_header")[0];
    my_header.innerHTML = "Man Of Action  <br> <br><br> Touch To Enter A Dream House ...";
},100);

function loadingFinish(){
    if(!areWeReady)
    return;
    var my_loader = document.getElementsByClassName("my_loader")[0]; 
    
  
        $(my_loader).fadeOut(1000);

        setTimeout(function(){
          my_loader.style.display = "none";
          document.getElementById("myAudio").play();   
        },1000)
      
}

