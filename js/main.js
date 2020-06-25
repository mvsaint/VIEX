$(document).ready(function () {
  $('.relevance__slider__wrapper').lightSlider({
    item: 1,
    slideMargin: 0,
    prevHtml: '<span class="icon icon-chevron-left"></span>',
    nextHtml: '<span class="icon icon-chevron-right"></span>'
  });
  $('.experience__slider').lightSlider({
    item: 1,
    slideMargin: 0,
    prevHtml: '<span class="icon-chevron-left"></span>',
    nextHtml: '<span class="icon-chevron-right"></span>'
  });
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top - fixed_offset
    }, 500);
    $(".rightbar .menu nav a").removeClass('active');
    $(this).addClass('active');

    if ($(this).next('a').length == 0) {
      $('.rightbar .menu button.next').css('visibility', 'hidden');
    } else {
      $('.rightbar .menu button.next').css('visibility', 'visible');
    }

    if ($(this).prev('a').length == 0) {
      $('.rightbar .menu button.back').css('visibility', 'hidden');
    } else {
      $('.rightbar .menu button.back').css('visibility', 'visible');
    }

    e.preventDefault();

    if (window.innerWidth <= 1365) {
      $(".rightbar .menu nav a, .rightbar .menu button.next, .rightbar .menu button.back").click(function () {
        $('.rightbar').removeClass('visible');
        $('.hamburger').removeClass('is-active');
      });
    }
  });
  $('.rightbar .menu button.next').click(function () {
    if ($(".rightbar .menu nav a.active").next('a').length != 0) {
      $(".rightbar .menu nav a.active").next('a').click();
    } else {
      $(this).css('visibility', 'hidden');
    }
  });
  $('.rightbar .menu button.back').click(function () {
    if ($(".rightbar .menu nav a.active").prev('a').length != 0) {
      $(".rightbar .menu nav a.active").prev('a').click();
    } else {
      $(this).css('visibility', 'hidden');
    }
  });

  var forEach = function forEach(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) {
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    } else for (var e = 0, l = t.length; l > e; e++) {
      o.call(r, t[e], e, t);
    }
  };

  var hamburgers = document.querySelectorAll(".hamburger");

  if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("is-active");
      }, false);
    });
  }

  $('.hamburger').click(function () {
    $('.rightbar').toggleClass('visible');
  });
});
