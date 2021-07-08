const myHeader = document.querySelector(".my_header");
const myLoader = document.querySelector(".my_loader");

myLoader.addEventListener('click',loadingFinish)

var areWeReady = false;
setTimeout(() => {
    areWeReady = true;
    myHeader.innerHTML = "Man Of Action  <br> <br><br> Touch To Enter A Dream House ...";
},10000);


function loadingFinish(){
    if(!areWeReady) return;

    $(myLoader).fadeOut(1000);

    setTimeout(function(){
          myLoader.style.display = "none";
          document.getElementById("myAudio").play();   
    },1000)
      
}

