var Search = require('./../js/search.js').searchModule;

var displaySearch = function(username, public_repos) {
  $('#title').text(username + " has " + public_repos + " public repositories.");
  $('#showButton').html("<button class='btn-success' id='seeRepos'>See Repos</button>");
};

var displayRepos = function(username, repos) {
  $('#title').append("Here are the 30 repos they've updated most recently:");
  repos.forEach(function(repo) {
    $('#showRepos').append("<li>" + repo.name + "</li>");
  });
};

$(document).ready(function() {
  var searchObject = new Search();
  $('.search-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    console.log(username);
    searchObject.userSearch(username, displaySearch);
  });

  $('#seeRepos').click(function(event){
    searchObject.getRepos(username, displayRepos);
  });
});
