const navMenu = document.getElementById("nav-menu"),
      navTogle = document.getElementById("nav-togle"),
      navClose = document.getElementById("nav-close")

      if(navTogle){
        navTogle.addEventListener("click", () =>{
          navMenu.classList.add("show-menu")
        })
      }
      if(navClose){
        navClose.addEventListener("click",()=>{
          navMenu.classList.remove("show-menu")
        })
      }

      const navLink = document.querySelectorAll("nav_link");
      const linkAction = ()=>{
        const navMenu = document.getElementById("nav-menu")
        navMenu.classList.remove("show-menu")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))
     