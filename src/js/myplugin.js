// document.onreadystatechange = () => {
//   if (document.readyState === 'interactive') {
//     // Выполнится после загрузки страницы и создания всех DOM узлов
    
//   }
// };

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