/*
========================================
Mobile Navigation
========================================
*/


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");



if (menuToggle && navLinks) {


    menuToggle.addEventListener("click", () => {


        navLinks.classList.toggle("active");


    });


}



/*
========================================
Close Mobile Navigation After Click
========================================
*/


const navItems = document.querySelectorAll(".nav-links a");



navItems.forEach((item) => {


    item.addEventListener("click", () => {


        if (navLinks.classList.contains("active")) {


            navLinks.classList.remove("active");


        }


    });


});
