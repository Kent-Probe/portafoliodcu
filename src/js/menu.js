document.addEventListener("DOMContentLoaded", (event) =>{

    const button = document.querySelector(".layout__menu-toggle");
    const icon_bars = document.querySelector(".layout__menu-toggle .fa-bars-staggered");
    const icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    const aside = document.querySelector(".layout__menu");
    
    button.addEventListener("click", (event) =>{
        event.preventDefault();
        const visible = document.querySelector(".layout__menu--visible");
        console.log(icon_bars)        
        console.log(icon_xmark)        
        console.log(aside)        
        console.log(visible)        
        if(!visible){
            aside.classList.add("layout__menu--visible");
            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1;
        }else{
            aside.classList.remove("layout__menu--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }

    });

    window.addEventListener("resize", () =>{
        let size = parseInt(document.body.clientWidth);

        if(size <= 1390){
            aside.classList.remove("layout__menu--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0;
        }
    })
})