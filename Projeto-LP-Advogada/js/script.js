const header = document.getElementById('js-header');


function fixedMenu() {
   if(window.pageYOffset > 60) {
        header.classList.add('fixed-menu');
    }else{
        header.classList.remove('fixed-menu');
    }
}

document.addEventListener('scroll', fixedMenu);

$(function (){
    $(".right-content nav ul a").on('click', function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 3000);
    })
})

const btnMenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay')
const clickMenu = document.querySelectorAll('.menu-mobile aside .container .right-content nav ul li a');

function openMenuMobile(){
    document.documentElement.classList.toggle('menu-opened');

    
    
}


clickMenu.forEach(btn =>{
    btn.addEventListener('click', (event)=>{
        event.preventDefault();

        document.documentElement.classList.toggle('menu-opened');
    })

})



console.log(clickMenu);

btnMenu.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);


