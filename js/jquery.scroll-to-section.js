$(document).ready(() => {

    // La apasarea logo-ului mic (scroll pana sus de tot):

    $('.nav-logo2').click(() => {
      $('html, body').animate({scrollTop: 0}, 700);
    })

    // Nav links:

    $('#nav-news').click(() => {

      var newsPos = $('#news-section').offset().top - 50;
      $('html, body').animate({scrollTop: newsPos}, 700);
    })

    $('#nav-biography').click(() => {

      var biographyPos = $('#biography-section').offset().top - 50;
      $('html, body').animate({scrollTop: biographyPos}, 700);
    })

    $('#nav-releases').click(() => {

      var releasesPos = $('#releases-section').offset().top - 50;
      $('html, body').animate({scrollTop: releasesPos}, 700);
    })

    $('#nav-media').click(() => {

      var mediaPos = $('#media-section').offset().top - 50;
      $('html, body').animate({scrollTop: mediaPos}, 700);
    })

    $('#nav-contact').click(() => {

      var biographyPos = $('#contact-section').offset().top - 50;
      $('html, body').animate({scrollTop: biographyPos}, 700);
    })



})
