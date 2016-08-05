var Search = require('./../js/search.js').searchModule;
var searchObject = new Search();

var displaySearch = function(username, public_repos) {
  $('#title').text(username + " has " + public_repos + " public repositories.");
  $('#showButton').html("<button class='btn-success' id='seeRepos'>See Repos</button>");
  $('#seeRepos').click(function(event){
    searchObject.getUserRepos(username, displayRepos);
  });
};

var displayRepos = function(username, repos) {
  $('#title2').text("Here are the 30 repos they've updated most recently:");
  repos.forEach(function(repo) {
    $('#showRepos').append("<li><a href='" + repo.html_url +"'</a>" + repo.name + "</li>");
  });
};

$(document).ready(function() {
  $('.search-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    console.log(username);
    searchObject.userSearch(username, displaySearch);

  });
});
