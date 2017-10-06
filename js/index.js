$(document).on('click', '.player-main .item', function() {
  $('.table').append(this);
});

$(document).on('click', '.table .item', function() {
  $('.player-main .player-hand').append(this);
});