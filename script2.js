
var bookTitle=localStorage.getItem("book-title");

function loadSearch(bookTitle) {
    var url="https://www.googleapis.com/books/v1/volumes?q=intitle:"+bookTitle;
    $.ajax({
      method: "GET",
      url: url,
      success: function(data) {
        console.log(data);
        //debugger;
        // console.log(data);
        // console.log(data.items["0"].volumeInfo.title);
        // console.log(data.items["0"].volumeInfo.authors);
        // console.log(data.items["0"].volumeInfo.description);
        // console.log(data.items["0"].volumeInfo.imageLinks.thumbnail);
        // location.href="search-results.html";
        // showBooksList(data);
        showBookList(data);
        // showBookInfo(data);
        
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

     
function showBookList(data)
{
  $(".search-results").empty();
  for (var i=0; i<data.items.length; i++)
  {
    console.log(data.items[i]);
    $(".search-results").append("<div class=\"row\">"+
                                "<div class=\"col-md-12 offset-md-1\">"+
                                "<button type=\"button\" class=\"btn btn-link search-results-of-titles\">"+
                              
                                i+") "+
                                data.items[i].volumeInfo.title+
                                "</button>"+
                                "</div>"+
                                "<div class=\"col-md-1\""+
                                
                                "/div"+
                                "</div>");
                        //  <div class=\"search-results-title\"> + data.items["0"].volumeInfo.title

                        
  }
  // $(".search-result-title").on("click",)
}

function showBookInfo(data) {
    $(".search-results").empty();
    $(".search-results").append("<div class=\"search-results-title\">" + data.items["0"].volumeInfo.title + "</div>",
                                "<p>" + data.items["0"].volumeInfo.description + "</p>", 
                                "<div class=\"search-results-author\">Written by:   " + data.items["0"].volumeInfo.authors + "</div>");
    $(".search-results").append("<img src=\"" + data.items["0"].volumeInfo.imageLinks.thumbnail + "\" >");
}

var fetch=function(){
    var bookTitle=$("#book-title-field").val();
    // alert(bookTitle);

    loadSearch(bookTitle);

}
loadSearch(bookTitle);

$(".search-button-two").on("click", fetch );



// $("#book-title-field").keypress(function(e) {
//   if(e.which == 13) {
//       // alert('You pressed enter!');
//       fetch();
//   }
// });
