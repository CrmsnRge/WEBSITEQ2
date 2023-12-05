const container = document.getElementById("container2");
const toggleButton = document.getElementById("button1");
const removeBlurButton = document.getElementById("id01");

toggleButton.addEventListener("click", function () {
    container.classList.toggle("blur");
});

removeBlurButton.addEventListener("click", function () {
    container.classList.remove("blur");
});

const container1 = document.getElementById("container2");
const toggleButton1 = document.getElementById("button2");
const removeBlurButton1 = document.getElementById("id02");

toggleButton1.addEventListener("click", function () {
    container.classList.toggle("blur");
});
removeBlurButton1.addEventListener("click", function () {
    container.classList.remove("blur");
});

const container2 = document.getElementById("container2");
const toggleButton2 = document.getElementById("button3");
const removeBlurButton2 = document.getElementById("id03");

toggleButton2.addEventListener("click", function () {
    container.classList.toggle("blur");
});
removeBlurButton2.addEventListener("click", function () {
    container.classList.remove("blur");
});

const container3 = document.getElementById("container2");
const toggleButton3 = document.getElementById("button4");
const removeBlurButton3 = document.getElementById("id04");

toggleButton3.addEventListener("click", function () {
    container.classList.toggle("blur");
});
removeBlurButton3.addEventListener("click", function () {
    container.classList.remove("blur");
});

const container4 = document.getElementById("container2");
const toggleButton4 = document.getElementById("button5");
const removeBlurButton4 = document.getElementById("id05");

toggleButton4.addEventListener("click", function () {
    container.classList.toggle("blur");
});
removeBlurButton4.addEventListener("click", function () {
    container.classList.remove("blur");
});




window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;  // Fix the typo here
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
var gallery = undefined;

function closeMenu() {
  $(".navbar-collapse").removeClass("show"); 
}

function highlightMenu(no) {
  $(".navbar .navbar-nav > .nav-item").removeClass('selected');
  $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + no + "']").parent().addClass('selected');
}
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 1;
  audio.play();
});
function setupGallery() {
  gallery = $('.gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}

function openPage(no) {
  if(no == 2) {
    if(gallery == undefined) {
      setupGallery();
    } else {
      $('.gallery-slider').slick('unslick');
      setupGallery();
    }    
  }

  $('.cd-hero-slider li').hide();
  $('.cd-hero-slider li[data-page-no="' + no + '"]')
    .fadeIn();
}

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});

jQuery(function() {
    $('.tm-page-link').on('click', function(){
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
      highlightMenu(pageNo);
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      var pageNo = $(this).data('no');

      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });
    const previewContainer = document.querySelector('.pre-container');
const mainContent = document.querySelector('.main-content');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const threshold = 100; // Adjust this threshold as needed

    if (mouseX < threshold) { // Check if cursor is on the left
        previewContainer.style.left = '0';
    } else {
        previewContainer.style.left = '-300px';
    }
});

// Add an event listener to the preview container for navigation
previewContainer.addEventListener('click', () => {
    window.location.href = 'index.html'; // Navigate to page2.html
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#8ea5eb,#6667AB,#5E5A80 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
    })
let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#8ea5eb,#6667AB,#5E5A80 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
        
    
