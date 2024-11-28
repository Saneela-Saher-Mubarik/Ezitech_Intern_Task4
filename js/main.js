AOS.init({
  duration: 2500,
  once: true,
});

const dropdowns = document.querySelectorAll(".nav-item.dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  let hideDropdownTimeout;

  dropdown.addEventListener("mouseenter", function () {
    clearTimeout(hideDropdownTimeout);
    dropdownMenu.style.display = "block";
    dropdownMenu.style.opacity = "1";
    dropdownMenu.style.visibility = "visible";
    dropdownMenu.style.transform = "translateY(20px)";
  });

  dropdown.addEventListener("mouseleave", function () {
    hideDropdownTimeout = setTimeout(function () {
      dropdownMenu.style.display = "none";
      dropdownMenu.style.opacity = "0";
      dropdownMenu.style.visibility = "hidden";
      dropdownMenu.style.transform = "translateY(40px)";
    }, 200);
  });
});

$(document).ready(function () {
  $("select").niceSelect();

  // TOP Menu Sticky
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".slicknav_menu").removeClass("sticky");
      $("#back-top").fadeIn(500);
    } else {
      $(".slicknav_menu").addClass("sticky");
      $("#back-top").fadeIn(500);
    }
  });

  //   $('#datepicker').datepicker({
  //     iconsLibrary: 'fontawesome',
  //     icons: {
  //      rightIcon: '<i class="fa-solid fa-chevron-down"></i>'
  //  }
  // });

  var brand = $(".brand_carousel");
  if (brand.length) {
    brand.owlCarousel({
      loop: true,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 2,
          nav: false,
        },
        767: {
          items: 4,
        },
        992: {
          items: 5,
        },
      },
    });
  }

  $(".testimonial_carousel").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    autoplay: true,
    navText: [
      '<i class="fa-solid fa-chevron-right"></i>',
      '<i class="fa-solid fa-chevron-left"></i>',
    ],
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplaySpeed: 800,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      767: {
        items: 1,
        nav: false,
      },
      992: {
        items: 1,
        nav: false,
      },
      1024: {
        items: 1,
      },
    },
  });

  if ($.fn.slicknav) {
    $("#menu").slicknav({
      label: "",
      duration: 800,
    });
  } else {
    console.error("SlickNav is not initialized");
  }
});
