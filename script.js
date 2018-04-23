// require('jquery');
// require('bootstrap');
// require('font-awesome');
// require('handlebars');





  function getSearchResults()
  {
    localStorage.setItem("book-title",$("#book-title-field").val());
    window.location.href="search-results.html";

  }
  $(".search-button").on("click",getSearchResults);


  // $("#book-title-field").keypress(function(e) {
  //   if(e.which == 13) {
  //       alert('You pressed enter!');
  //       getSearchResults();
  //   }
  // });