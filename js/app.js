$('.carousel1').owlCarousel({
  loop:true,
  margin:16,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
  autoplay:false,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1,
          nav: false
      },
      768:{
          items:2
      },
      1000:{
          items:2
      }
  }
});
$('.carousel2').owlCarousel({
  loop:true,
  margin:16,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
  autoplay:false,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2,
          nav: false
      },
     768:{
          items:3
      },
      1000:{
          items:5
      }
  }
});
$('.carousel3').owlCarousel({
  loop:true,
  margin:16,
  nav:true,
  dots:false,
  navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
  autoplay:false,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:2,
          nav: false
      },
     768:{
          items:3
      },
      1000:{
          items:5
      }
  }
});
$('.carousel4').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    dots:false,
    navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    autoplay:false,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2,
            nav: false
        },
       768:{
            items:2
        },
        1000:{
            items:2
        }
    }
  });