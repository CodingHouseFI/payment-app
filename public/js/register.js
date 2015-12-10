'use strict';

$(function(){
  $('#register').click(register);
})

function register(e) {
  e.preventDefault();

  var username = $('#username').val();
  var pw1 = $('#pw1').val();
  var pw2 = $('#pw2').val();

  if(pw1 !== pw2){
    $('#pw1').val('');
    $('#pw2').val('');
    swal('Error:', 'Passwords do not match.', 'error');
  } else {
    $.post('/users/register', {username: username, password: pw1})
    .done(function(data){
      localStorage['myToken'] = data.token;
      window.location.replace('/login');
    })
    .fail(function(err){
      swal('Error:', err, 'error');
    });
  }
}
