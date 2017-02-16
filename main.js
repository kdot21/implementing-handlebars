// it is convention to use all caps for constants
// constants are variables whose value are not expected to change, immutable
var OMDB_API_URL = "https://www.omdbapi.com/?";

function getOMDBResults(title) {
  //let's make sure the field isn't empty
  if (title.length == 0) {
    $("#result").html("Please enter text into the search field");
  } else {
    //if a search term is entered...we'll start the search process
    //we can build the URL string to execute the HTTP GET request using $.get
    $.get(OMDB_API_URL + "t=" + title, function(searchResult) {

      //Student Code Starts Here
	  var source = $('#movie-template').html();
      
      var template = Handlebars.compile(source);
      
      var movie = {
        title: searchResult.Title,
        releaseDate: searchResult.Released,
        actors: searchResult.Actors,
        poster: searchResult.Poster
      };

      var html = template(movie);
      
      $('#result').html(html);
    });
  }
};

//click event listener on #searchBtn element
$("#searchBtn").on('click', function(e) {
  e.preventDefault();
  getOMDBResults($("#searchField").val());
});