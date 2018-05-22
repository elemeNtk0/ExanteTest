// scroll to позаимствован с https://codepen.io/rleve/pen/iCbgy
function ready() {
  (function() {
    'use strict';
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {
      var smoothScroll = function (anchor, duration) {
        var startLocation = window.pageYOffset;
        var endLocation = anchor.offsetTop;
        var distance = endLocation - startLocation;
        var increments = distance/(duration/16);
        var stopAnimation;

        var animateScroll = function () {
          window.scrollBy(0, increments);
          stopAnimation();
        };

        if ( increments >= 0 ) {
          stopAnimation = function () {
            var travelled = window.pageYOffset;
            if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
              clearInterval(runAnimation);
            }
          };
        }
        else {
          stopAnimation = function () {
            var travelled = window.pageYOffset;
            if ( travelled <= (endLocation || 0) ) {
              clearInterval(runAnimation);
            }
          };
        }

        var runAnimation = setInterval(animateScroll, 16);
      };
      var scrollToggle = document.querySelectorAll('.js-scroll');
      [].forEach.call(scrollToggle, function (toggle) {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          var dataID = toggle.getAttribute('data-href');
          var dataTarget = document.querySelector(dataID);
          var dataSpeed = toggle.getAttribute('data-speed');

          if (dataTarget) {
            smoothScroll(dataTarget, dataSpeed || 500);
          }
        }, false);
      });
    }

    // Мой код начинается здесь
    var body = document.querySelector("body");
    var menuToggle = document.querySelector(".js_buttonMainNav");

    menuToggle.addEventListener("click", function(e) {
      e.preventDefault();
      this.classList.toggle("button_menu-light");
      body.classList.toggle("menu-is-open");
    });

  })();
}

document.addEventListener("DOMContentLoaded", ready);



  // function desktopAccordion() {
  //   // console.log("Ну вот и декстопчик > 480");

  //   var menuList = document.querySelectorAll(".toggle-menu__item");
  //   var articleList = document.querySelectorAll(".toggle-content__article");

  //   var body = document.querySelector("body");
  //   var header = document.querySelector(".header");

  //   var toggleContent = document.querySelector(".toggle-content");
  //   var toggleContentMenu = document.querySelector(".toggle-content__menu");
  //   var toggleMenu = document.querySelector(".toggle-menu");


  //   for (var i = 0; i < menuList.length; i++) {
  //     menuList[i].addEventListener("click", function(e) {
  //       e.preventDefault();

  //       // Для setTimeOut
  //       var $this = this;

  //       var contentId = $this.getAttribute("data-href");
  //       var contentIdGo = document.getElementById(contentId);

  //       for (var j = 0; j < menuList.length; j++) {
  //         menuList[j].classList.remove("toggle-menu__item_is-active");
  //       }
        
  //       for (var k = 0; k < articleList.length; k++) {
  //         articleList[k].classList.remove("animated_delay");
  //         articleList[k].classList.remove("toggle-content__article_is-opened");
  //       }

  //       toggleContent.classList.add("animated");
  //       header.classList.add("animated");
  //       contentIdGo.classList.add("animated_delay");

  //       function repeatActions() {
  //         $this.classList.add("toggle-menu__item_is-active");
  //         toggleMenu.classList.add("toggle-menu_in-top");
  //         toggleContentMenu.classList.add("toggle-content__menu_fixed");
  //         toggleContent.classList.remove("animated");
  //         header.classList.remove("animated");
  //         header.classList.add("visually-hidden");
  //         contentIdGo.classList.add("toggle-content__article_is-opened");
  //       }
        
  //       if (!body.classList.contains("article-is-opened")) {
  //         setTimeout(function() {
  //           body.classList.add("article-is-opened");
  //           repeatActions();
  //         }, 1050);
  //       }
  //       else repeatActions();
  //     });
  //   };
  // }