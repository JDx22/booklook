// require('jquery');
// require('bootstrap');
// require('font-awesome');
// require('handlebars');



var fetch = function () {
    var url="https://www.googleapis.com/books/v1/volumes?q=isbn:"+$("#isbn-number-field").val();
    $.ajax({
      method: "GET",
      url: url,
      success: function(data) {
        debugger;
        // console.log(data);
        // console.log(data.items["0"].volumeInfo.title);
        // console.log(data.items["0"].volumeInfo.authors);
        // console.log(data.items["0"].volumeInfo.description);
        // console.log(data.items["0"].volumeInfo.imageLinks.thumbnail);
        showBookInfo(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

  $(".search-isbn-button").on("click",fetch);

function showBookInfo(data)
{
  $(".search-results").empty();
  $(".search-results").append("<div class=\"search-results-title\">"+data.items["0"].volumeInfo.title+"</div>",
                              "<p>"+data.items["0"].volumeInfo.description +"</p>",
                              "<div class=\"search-results-author\">Written by:   "+data.items["0"].volumeInfo.authors+"</div>",
                              "<img src=\""+data.items["0"].volumeInfo.imageLinks.thumbnail+"\" >");
       


}