var searcTerm = "";
var limit = "";
var startYear = "";
var endYear = "";

$(document).ready(function() {
    var APIKey = "HF6ua443fROIQFtADx1rvLQm8wXvyApj"
    var URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey;
    APIKey;




    function clear() {

    }

    function search() {

    }

    $("#searchButton").on("click", function() {

        event.preventDefault();
        searchTerm = $("#searchTerm").val().trim();
        limit = $("#limit").val();
        var newURL = URL + "&q=" + searchTerm;
        $.ajax({
            url: newURL,
            method: "GET"
        }).then(function(response) {
            console.log(newURL);
            for (let i = 0; i < limit; i++) {
                var snippet = response.response.docs[i].snippet;
                var newDiv = $("<div id='result' style='margin:20px;'>");
                $(newDiv).text(snippet);
                $("#top").append(newDiv);
            }

        });


    });




























})