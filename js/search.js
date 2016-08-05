var apiKey = require('./../.env').apiKey;

Search = function(){
};

Search.prototype.doSearch = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    // $('.results').text("Over the past year there were " + response.proximity + " " + manufacturer + " bikes stolen in Portland.");
  }).fail(function(error) {
    $('.results').text(error.responseJSON.message);
  });
};

exports.searchModule = Search;
