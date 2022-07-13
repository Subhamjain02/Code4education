
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

// document.getElementById('id').click(function(){
//     console.log("aaa");
// var value = $("#id").val();
// window.location.href = 'www.youtube.com';
//     return false;
    
// });

document.getElementById('submit1').onclick = function() {
    var value = document.getElementById("id1").value;
    // console.log(value);
    var redirectUrl = "https://stackoverflow.com/nocaptcha?s=" + value;
    window. open(redirectUrl, '_blank');     
    return false;
 
 };
 document.getElementById('submit2').onclick = function() {
    var value = document.getElementById("id2").value;
    // console.log(value);
    var redirectUrl = "http://youtube.com/results?search_query=" + value;
    window. open(redirectUrl, '_blank');     
    return false;
 
 };
 document.getElementById('submit3').onclick = function() {
    var value = document.getElementById("id3").value;
    // console.log(value);
    var redirectUrl = "https://www.google.com/search?q=" + value;
    window. open(redirectUrl, '_blank');     
    return false;
 
 };
