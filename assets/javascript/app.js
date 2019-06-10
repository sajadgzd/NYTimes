var searcTerm = "";
var limit = 0;
var startYear = "";
var endYear = "";

$(document).ready(function() {
    var APIKey = "yqpzEG5Xvzd6NApuHiWeK2l8j3Z69ijV"
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
                $(newDiv).append(`<h4> ${i}. </h4> ${snippet}`);
                $("#top").append(newDiv);
            }

        });


    });






})