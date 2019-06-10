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
        startYear = $("#startYear").val().trim();
        endYear = $("#endYear").val().trim();
        limit = $("#limit").val();
        var newURL = URL + "&q=" + searchTerm;

        if (parseInt(startYear)) {
            startYear = startYear + "0101";
            newURL = newURL + "&begin_date=" + startYear;
        }

        if (parseInt(startYear)) {
            endYear = endYear + "0101";
            newURL = newURL + "&end_date=" + endYear;
        }


        $.ajax({
            url: newURL,
            method: "GET"
        }).then(function(response) {
            console.log(newURL);
            for (let i = 0; i < limit; i++) {
                var snippet = response.response.docs[i].snippet;
                var newDiv = $(`<div id='result-${i}' style='margin:20px;'>`);
                $(newDiv).append(`<h4> ${i+1}. </h4> ${snippet}`);
                var pubDate = response.response.docs[i].pub_date;
                $(newDiv).prepend(`${pubDate}`);
                $("#top").append(newDiv);

            }

        });


    });






})