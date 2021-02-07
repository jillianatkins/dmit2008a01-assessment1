import SearchController from "./controllers/search-controller";
import AlphaVantageModel from "./models/alphavantage";
import ResultsView from "./views/results-view";
import SearchView from "./views/search-view";

const model = new AlphaVantageModel();
const searchView = new SearchView("#search");
const resultsView = new ResultsView("#results");
const searchController = new SearchController(model, searchView, resultsView);


// window.addEventListener('load', function(e) {
//     const searchURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=G2L4WF5QLHADE4S3&symbol="


// async function getData (stockSymbol) {
//     let url = searchURL + stockSymbol;
//     const req = await fetch(url)
//     const result = await req.json()
//     console.log(result["Global Quote"]["01. symbol"])
// }

// getData("ibm")

// })