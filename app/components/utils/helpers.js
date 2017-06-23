var axios = require("axios");

var nytAPI = "eb2cb08df1fb4ff6a03bc1444e5a0486";

var helpers = {
    runQuery: function (article) {
        console.log(article);
        // Search for the article based on user input
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
            'api-key': nytAPI,
            'q': article,
            'begin_date': "",
            'end_date': "",
            'fl': "headline, web_url"
        });

        $.ajax({
            method: 'GET',
            url: queryURL,
        }).done(function (result) {
            console.log(result);
        }).fail(function (err) {
            throw err;
        })

        return axios.get(queryURL).then(function (response) {
            console.log(response);
            return response.data.results[0].formatted;
        });
    }
};

module.exports = helpers;