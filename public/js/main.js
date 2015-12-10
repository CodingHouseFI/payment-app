'use strict';

$(document).ready(init);

function init() {
  $('#logout').click(logout);
}

function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });
}
