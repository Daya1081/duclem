
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

/*SELECCIONA EL ITEM DEL MENU MIENTRAS SE HACE SCROLL*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        alert(id);
        const menuLink = document.querySelector(`.menu a[href="#${id}"]`)
        if(entry.isIntersecting){
            menuLink.classList.add("active");
        }
    });
});

/*ACTIVA E INACTIVA EL ITEM DEL MENU AL HACER CLICK*/
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        let activo = document.querySelector(".active");
        activo.classList.remove("active");
        menuLink.classList.add("active");
    })
    
    const hash = menuLink.getAttribute("href");
   
    if(hash != "#"){
        const target = document.querySelector(`${hash}`);
        if(target){
            observer.observe(target);
        }
    }
})

 /* $(function(){

    $('a[href*="#"]').click(function() {
        //eliminoActive();   
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            
            var $target = $(this.hash);
            
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

            if ($target.length) {

                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 1000);

                return false;

           }

      }


  });

});*/