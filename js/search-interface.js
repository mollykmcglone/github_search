var Search = require('./../js/search.js').searchModule;
var searchObject = new Search();

var displaySearch = function(username, public_repos) {
  var count = 0;
  $('#showResults').html("<h3>" + username + " has " + public_repos + " public repositories.</h3>");
    $('#seeRepos').show();
    $('#seeRepos').click(function(event){
      if (count === 0) {
        searchObject.getUserRepos(username, displayRepos);
        count += 1;
      }
      $('#showRepos').show();
      $('#seeRepos').hide();
      $('#hideRepos').show();
    });
};

var displayRepos = function(username, repos) {
  $('#showRepos').append('<br><ul>');
  repos.forEach(function(repo) {
    if (repo.description === null) {
      repo.description = "No description provided";
    }
    $('#showRepos').append('<li><a href=' + repo.html_url + '>' + repo.name + '</a> ' + repo.description + '</li>');
  });
  $('#showRepos').append('</ul></div>');
  $('#hideRepos').click(function(event){
    $('#showRepos').hide();
    $('#hideRepos').hide();
    $('#seeRepos').show();
  });
};

$(document).ready(function() {
  $('.search-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    $('#showRepos').text("");
    $('#hideRepos').hide();
    console.log(username);
    searchObject.userSearch(username, displaySearch);
  });
});
