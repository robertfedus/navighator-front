$(document).ready(() => {
  if($(window).width() <= 768) {
    $('.band-members').hide();
    const showMessage = 'Show the current lineup';
    const hideMessage = 'Hide the current lineup';

    $('#toggle-members').append(showMessage);
    var toggle = false;

    $('#toggle-members').click(() => {
      if(toggle == false) {
        $('.band-members').fadeIn(700);
        $('#toggle-members').text(hideMessage);
        toggle = true;
      } else {
        $('.band-members').fadeOut(700);
        $('#toggle-members').text(showMessage);
        toggle = false;
      }
    })
  } else {
    $('.band-members').show();
  }
})
