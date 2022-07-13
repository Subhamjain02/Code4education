
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    if(toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')

            toggle.classList.toggle('bx-x')

            bodypd.classList.toggle('body-pd')

            headerpd.classList.toggle('body-pd')
        })
    }
}



showNavbar('header-toggle','nav-bar','body-pd','header')

const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
} 
linkColor.forEach(l=> l.addEventListener('click', colorLink))



// //import $ from "https://cdn.skypack.dev/jquery@3.6.0";

// //$(function () {
//   $(".image").on("click", function () {
//     if ($(this).hasClass("a")) {
//       $(".b").removeClass("activeB");
//       $(".c").removeClass("activeC");
//       $(this).toggleClass("activeA");
//     } else if ($(this).hasClass("b")) {
//       $(".a").removeClass("activeA");
//       $(".c").removeClass("activeC");
//       $(this).toggleClass("activeB");
//     } else if ($(this).hasClass("c")) {
//       $(".a").removeClass("activeA");
//       $(".b").removeClass("activeB");
//       $(this).toggleClass("activeC");
//     }
//   });
// //});

