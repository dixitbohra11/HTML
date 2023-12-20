const container = document.querySelector("#container"),
      slide = document.querySelector("#slide");

const prev = document.querySelector("#prev"),
      next = document.querySelector("#next");

let currImg = 0;
let size = container.clientWidth;

window.addEventListener("resize" , () => {
    size = container.clientWidth;
    slide.style.transform = "translateX("+(-currImg*size)+"px)";
})

window.addEventListener("load" , () => {
    size = container.clientWidth;
    prev.style.opacity = 0;
    next.style.opacity = 0;
})

next.addEventListener("click",function() {
    slide.style.transition = "transform .8s ease-in-out";
        if(currImg ==4)
            {
                
            }
}
)