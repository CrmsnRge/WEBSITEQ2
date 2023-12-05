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

    const carousel = document.querySelector(".carousel");
    const progressBarContainer = document.querySelector(".prog-bar-container");
    const progressBar = document.querySelector(".prog-bar");
    let isDragStart = false;
    let dragStartX = 0;
    let touchStartX = 4; // Added for touch support
    const speedFactor = 8; // Adjust the speed factor as needed
    const scrollFactor = 30; // Adjust as needed
    

    // Define an array of specific colors for the progress bar
    const colors = ['#8ea5eb', '#6667AB', '#5E5A80'];

    const dragStart = (e) => {
      isDragStart = true;
      dragStartX = e.pageX || e.touches[0].pageX;
      touchStartX = e.touches ? e.touches[0].pageX : 0; // Updated for touch support
    };

    const dragging = (e) => {
      if (!isDragStart) return;
      e.preventDefault();
      const mouseX = e.pageX || e.touches[0].pageX; // Added for touch support
      const dragDistance = (mouseX - dragStartX) * speedFactor;
      carousel.scrollLeft -= dragDistance * scrollFactor;
      dragStartX = mouseX;
      updateProgressBar();
    };

    requestAnimationFrame(() => {
      carousel.style.scrollBehavior = 'auto';
      carousel.scrollTop;  // Trigger reflow
      carousel.style.scrollBehavior = 'smooth';
    });

    const dragEnd = () => {
      isDragStart = false;
    };

    const updateProgressBar = () => {
      const totalWidth = carousel.scrollWidth - carousel.clientWidth;
      const currentScroll = carousel.scrollLeft;
      const percentage = (currentScroll / totalWidth) * 100;

      progressBar.style.width = `${percentage}%`;
      updateColorProgressBar(percentage);
    };

    const updateColorProgressBar = (percentage) => {
      // Interpolate between specific colors based on the scroll position
      const colorIndex = Math.floor((percentage / 100) * (colors.length - 1));
      const startColor = colors[colorIndex];
      const endColor = colors[colorIndex + 1] || startColor;

      progressBar.style.background = `linear-gradient(to right, ${startColor}, ${endColor} ${percentage}%)`;
    };

    carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("mouseleave", dragEnd);
carousel.addEventListener("touchstart", dragStart); // Added for touch support
carousel.addEventListener("touchmove", dragging); // Added for touch support
carousel.addEventListener("touchend", dragEnd); // Added for touch support
carousel.addEventListener("scroll", updateProgressBar);

    // Show/hide progress bar based on scroll position
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        progressBarContainer.style.display = "block";
      } else {
        progressBarContainer.style.display = "none";
      }
    });
    


    
 
