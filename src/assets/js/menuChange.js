// 
// const menuItems = document.querySelectorAll(".menu__option");

// menuLinks.forEach((link, index) => {
//     console.log("asdasd")
//     link.addEventListener("click", () => {
//       console.log("dddd")
//     menuItems.forEach((item) => item.classList.remove("menu__link--active"));
//     menuItems[index].classList.add("menu__link--active");
//   });
// });

//
const classActive = "menu__link--active"

//Menu
const goHome = document.getElementById("goHome");
const goTeam = document.getElementById("goTeam");
const goProyect = document.getElementById("goProyect");
const goResult = document.getElementById("goResult");

// Seccion
const principal = document.getElementById('principal');
const team = document.getElementById("team");
const proyect = document.getElementById("proyect");
const result = document.getElementById("result");


window.addEventListener('scroll', function() {
    
    // Positions
    const principalPosicion = principal.getBoundingClientRect();
    const teamPosicion = team.getBoundingClientRect();
    const proyectPosicion = proyect.getBoundingClientRect();
    const resultPosicion = result.getBoundingClientRect();
    

    if(principalPosicion.top < window.innerHeight && principalPosicion.bottom >= 0) {
        goHome.classList.add(classActive)
        goTeam.classList.remove(classActive)
        goProyect.classList.remove(classActive)
        goResult.classList.remove(classActive)
    }
    else if(teamPosicion.top < window.innerHeight && teamPosicion.bottom >= 0) {
        goTeam.classList.add(classActive)
        goHome.classList.remove(classActive)
        goProyect.classList.remove(classActive)
        goResult.classList.remove(classActive)
    }
    else if(proyectPosicion.top < window.innerHeight && proyectPosicion.bottom >= 0) {
        goProyect.classList.add(classActive)
        goTeam.classList.remove(classActive)
        goHome.classList.remove(classActive)
        goResult.classList.remove(classActive)
    }
    else if(resultPosicion.top < window.innerHeight && resultPosicion.bottom >= 0) {
        goResult.classList.add(classActive)
        goTeam.classList.remove(classActive)
        goProyect.classList.remove(classActive)
        goHome.classList.remove(classActive)
    }
});