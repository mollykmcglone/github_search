var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  var searchObject = new Search();
  $('.search-form').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    console.log(username);
    searchObject.doSearch(username);
  });
});
