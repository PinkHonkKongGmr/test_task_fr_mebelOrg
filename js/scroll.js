
window.onscroll=function () {

var menu=document.querySelector('.main_menu');
var cont = document.querySelector('.leftPart');
 var menuQuardinats = menu.getBoundingClientRect().bottom;



 var nope= document.getElementsByClassName('nope');
 var phone = document.querySelector('.third_header_item');





 if (window.pageYOffset>200) {


      for (var i = 0; i < nope.length; i++) {
        nope[i].classList.add('hide');
      }

     phone.classList.add('fixed');


  }

   if (window.pageYOffset==0) {

    for (var i = 0; i < nope.length; i++) {
      nope[i].classList.remove('hide');
    }

    phone.classList.remove('fixed');

  }

  if (window.pageYOffset>menuQuardinats) {

    menu.classList.add('fixedMenu');
    cont.classList.add('flexend');

  }
  if (window.pageYOffset<menuQuardinats) {

    menu.classList.remove('fixedMenu');
  cont.classList.remove('flexend');

  }



};
