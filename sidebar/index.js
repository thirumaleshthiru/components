let sidebar = document.querySelector('.sidebar');
let open_side = document.querySelector("#open");
let close_side = document.querySelector("#close")

let isOpen = false;
open_side.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!isOpen){
        sidebar.style.display = "block"
        open_side.style.left = "25%"
        open_side.style.marginLeft = "-25px";
        isOpen = true;
        open_side.innerHTML = "&lt;"
    }
    else{
        
        sidebar.style.display = "none"
        open_side.style.left = "10px"
        isOpen = false;
        open_side.innerHTML = "&gt;"
        open_side.style.marginLeft = "auto";
    }
 
    

})

/*close_side.addEventListener("click", (e)=>{
    e.preventDefault();
    sidebar.style.display = "none"
    open_side.style.left = "0"
  
})*/