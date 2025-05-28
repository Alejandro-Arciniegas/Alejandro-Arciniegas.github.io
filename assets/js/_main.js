/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {

document.documentElement.setAttribute("data-theme", "light");
$("#theme-icon").removeClass("fa-moon").addClass("fa-sun");

  // Sticky footer
  const scssLarge = 925; // pixels
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  },
    didResize = false;

  bumpIt();
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on("resize", function () {
    if (
      $(".author__urls.social-icons").css("display") == "none" &&
      $(window).width() >= scssLarge
    ) {
      $(".author__urls").css("display", "block");
    }
  });

  // Smooth scroll init
  $("a").smoothScroll({
    offset: -75, // matches $masthead-height
    preventDefault: false,
  });

  // Add lightbox class to all image links
  $("a[href$='.jpg'],\
     a[href$='.jpeg'],\
     a[href$='.JPG'],\
     a[href$='.png'],\
     a[href$='.gif'],\
     a[href$='.webp']")
    .not(":has(img)")
    .addClass("image-popup");

  // Wrap standalone <img> tags in lightbox links
  $("p > img")
    .not(".emoji")
    .each(function () {
      var $img = $(this);
      if (!$img.parent().is("a.image-popup")) {
        $("<a>")
          .addClass("image-popup")
          .attr("href", $img.attr("src"))
          .insertBefore($img)
          .append($img);
      }
    });

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500,
    mainClass: "mfp-zoom-in",
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
      },
    },
    closeOnContentClick: true,
    midClick: true,
  });
});

