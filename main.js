document.getElementById("mostrar-mas").addEventListener('click', function(){
    document.getElementById("verExp1").style.display = "block";
    document.getElementById("verExp2").style.display ="block";
    document.getElementById("mostrar-mas").style.display="none";
   
})
document.getElementById("mostrar-menos").addEventListener('click', function(){
    document.getElementById("verExp1").style.display = "none";
    document.getElementById("verExp2").style.display="none";
    document.getElementById("mostrar-mas").style.display = "initial";
    document.getElementById("bottom").style.display="none";
})