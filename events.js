let button = document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    // alert("i was clicked..")
    document.querySelector(".box").innerHTML = "<b> ye you are clicked </b> enjoy your click"
})
button.addEventListener("contextmenu",()=>{
    alert("dont hacke us by using right click please")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode);
    
})