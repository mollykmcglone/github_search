var apiKey = require('./../.env').apiKey;

Search = function(){
};

Search.prototype.getUserRepos = function(username, displayRepos) {
    $.get('https://api.github.com/users/' + username + '/repos?&sort=updated/access_token=' + apiKey).then(function(response){
    console.log(response);
    displayRepos(username, response);
  }).fail(function(error) {
    $('.showResults').text(error.responseJSON.message);
  });
};

Search.prototype.userSearch = function(username, displaySearch) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displaySearch(username, response.public_repos);
  }).fail(function(error) {
    $('.showResults').text(error.responseJSON.message);
  });
};

exports.searchModule = Search;
