$(document).ready(() => {
  $('.member-info').hide();
  $('.member-info-mobile').hide();
  $('.member-pointer').hide();

  // Verificam daca membrii au trecut unii sub altii


    $('#member-pic-1').click(() => {
      if($(window).width() <= 768) {
        fadeOthersMobile('#member-mobile-1', '#member-pointer-1');
        scrollToInfo('#member-mobile-1');
      }
    })

    $('#member-pic-2').click(() => {
      if($(window).width() <= 768) {
        fadeOthersMobile('#member-mobile-2', '#member-pointer-2');
        scrollToInfo('#member-mobile-2');
      }
    })

    $('#member-pic-3').click(() => {
      if($(window).width() <= 768) {
        fadeOthersMobile('#member-mobile-3', '#member-pointer-3');
        scrollToInfo('#member-mobile-3');
      }
    })

    $('#member-pic-4').click(() => {
      if($(window).width() <= 768) {
        fadeOthersMobile('#member-mobile-4', '#member-pointer-4');
        scrollToInfo('#member-mobile-4');
      }
    })

    $('#member-pic-5').click(() => {
      if($(window).width() <= 768) {
        fadeOthersMobile('#member-mobile-5', '#member-pointer-5');
        scrollToInfo('#member-mobile-5');
      }
    })



})

function fadeOthersMobile(member, pointer) {
  $('#member-mobile-1').hide();
  $('#member-mobile-2').hide();
  $('#member-mobile-3').hide();
  $('#member-mobile-4').hide();
  $('#member-mobile-5').hide();
  $('#member-pointer-1').hide();
  $('#member-pointer-2').hide();
  $('#member-pointer-3').hide();
  $('#member-pointer-4').hide();
  $('#member-pointer-5').hide();
  $(member).fadeIn(1000);
  $(pointer).fadeIn(1000);
}

function scrollToMobileInfo(infoDiv) {
  let mobileInfoPos = $(infoDiv).offset().top - 500;
  $('html, body').animate({scrollTop: mobileInfoPos}, 700);
}
