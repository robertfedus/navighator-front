$(document).ready(() => {

  if($(window).width() > 768) {
    
    $('#member-1').hide();
    $('#member-2').hide();
    $('#member-3').hide();
    $('#member-4').hide();
    $('#member-5').hide();
    $('.member-pointer').hide();

    $('#member-pic-1').click(() => {
      fadeOthers('#member-1', '#member-pointer-1');
      scrollToInfo('#member-1');
    })

    $('#member-pic-2').click(() => {
      fadeOthers('#member-2', '#member-pointer-2');
      scrollToInfo('#member-2');
    })

    $('#member-pic-3').click(() => {
      fadeOthers('#member-3', '#member-pointer-3');
      scrollToInfo('#member-3');
    })

    $('#member-pic-4').click(() => {
      fadeOthers('#member-4', '#member-pointer-4');
      scrollToInfo('#member-4');
    })

    $('#member-pic-5').click(() => {
      fadeOthers('#member-5', '#member-pointer-5');
      scrollToInfo('#member-5');
    })
  }
})

function fadeOthers(member, pointer) {
  $('#member-1').hide();
  $('#member-2').hide();
  $('#member-3').hide();
  $('#member-4').hide();
  $('#member-5').hide();
  $('#member-pointer-1').hide();
  $('#member-pointer-2').hide();
  $('#member-pointer-3').hide();
  $('#member-pointer-4').hide();
  $('#member-pointer-5').hide();
  $(member).fadeIn(1000);
  $(pointer).fadeIn(1000);
}

function scrollToInfo(infoDiv) {
  let infoPos = $(infoDiv).offset().top - 500;
  $('html, body').animate({scrollTop: infoPos}, 700);
}
