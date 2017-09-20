//// Scroll Top functionality ////
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("go-top-button").style.display = "block";
  } else {
    document.getElementById("go-top-button").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document using jQuery //

function topFunction() {
  $('html, body').animate({
    scrollTop : 0
  }, 500);
}

// Responsive navigation using jQuery//

$("button.toggle-icon").on("click", function() {
  $("nav > ul").toggleClass("responsive-ul");
  $("nav").toggleClass("responsive-nav-height");
});

// animated scrolling to different sections //

var anchors = $('a[href^="#"]');
anchors.on('click', function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $('html, body').animate({
    'scrollTop':$target.offset().top
  },900, 'swing', function() {
    window.location.hash = target;
  }); 
});
