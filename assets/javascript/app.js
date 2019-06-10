var searcTerm = "";
var limit = "";
var startYear = "";
var endYear = "";

$(document).ready(function() {
    var APIKey = "21f4a17d-89bf-43f2-a3ed-feef72737806";
    var URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey;




    function clear() {

    }

    function search() {

    }

    $("searchButton").on("click", function() {
        searcTerm = $("#searchTerm").val().trim();
        var newURL = URL + "&q=" + searcTerm;
        $.ajax({
            url: newURL,
            method: "GET"
        }).then(function(response) {

            console.log(response);

        });


    });




























})