import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// These variables will hold the results we get from the user's inputs via HTML
var searchTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
"b9f91d369ff59547cd47b931d8cbc56b:0:74623931" + "&q=";

// Counter to keep track of article numbers as they come in
var articleCounter = 0;

var searchURL = queryURLBase + 'the matrix';



export default {
  search: function(query) {
   // return axios.get(BASEURL + query + APIKEY);
    return axios.get(queryURLBase + query);
  }
};
