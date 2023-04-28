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

      /*===================Change Header Background scroll =======*/
      const scrollHeader = ()=>{
        const header = document.getElementById('header')
        this.scrollY  >= 50 ? header.classList.add('bg-header')
                            :  header.classList.remove('bg-header')
      }
      window.addEventListener('scroll', scrollHeader)
     

       /*===================Change Theme =======*/
      const themeButton = document.getElementById("theme-button");
      const darkTheme = "dark_theme";
      const iconTheme = "ri-sun-line";

      const selectedTheme = localStorage.getItem("selected-theme");
      const selectedIcon = localStorage.getItem("selected-icon");

       const getCurrentTheme = document.body.classList.contains(darkTheme)? "dark": "light";
       const getCurrentIcon = themeButton.classList.contains(iconTheme)? "ri-moon-line": "ri-sun-line"

       if(selectedTheme){
        document.body.classList[selectedTheme === "dark" ? "add": "remove"](darkTheme)
        themeButton.classList[selectedIcon === "ri-moon-line" ? "add": "remove"](darkIcon)
       }

       themeButton.addEventListener("click", ()=>{
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem("seleted-theme", getCurrentTheme());
        localStorage.setItem("seleted-icon", getCurrentIcon());
       })

       /*=======================ScrollRevealAnimation================================*/
       const src = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 300,
        //reset:  true
       }
       )

       src.reveal(`.home_img, .newletter_container, .footer_logo, .footer_description, .footer_content, .footer_info`)
       src.reveal(`.home_data`,{origin: 'bottom'})
       src.reveal(`.about_data, .recently_data`,{origin: 'left'})
       src.reveal(`.about_img, .recently_image`,{origin: 'right'})
       src.reveal(`.popular_card`,{interval: 100})