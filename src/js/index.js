// import SearchController from "./controllers/search-controller";
// import AlphaVantageModel from "./models/alphavantage";
// import ResultsView from "./views/results-view";
// import SearchView from "./views/search-view";

// const model = new AlphaVantageModel();
// const searchView = new SearchView("#search");
// const resultsView = new ResultsView("#results");
// const searchController = new SearchController(model, searchView, resultsView);


window.addEventListener('load', function(e) {
    const searchURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=G2L4WF5QLHADE4S3&symbol="


    async function getData (stockSymbol) {
        let url = searchURL + stockSymbol;
        const req = await fetch(url)
        const result = await req.json()
        //console.log(result["Global Quote"]["01. symbol"])
        console.log(result["Global Quote"])
        return result;
    }

    document.forms.search.addEventListener('submit', function(e){
        e.preventDefault();
        const stockData = getData(e.currentTarget.elements.searchTerm.value)
        stockData.then(res=> {
            if(res["Global Quote"]["01. symbol"] === undefined){
                const errorTemplate = `<h3 class="error">No results found for that symbol.</h3>`
                document.querySelector('.results').innerHTML = errorTemplate;
            }
            else{
            const symbolView = `
                <h3 class="symbolName">${res["Global Quote"]["01. symbol"]}</h3>
                
                <ul class="details">
                    <li> latest trading day: <span>${res["Global Quote"]["07. latest trading day"]}</span></li>
                    <li> opening price: <span>${res["Global Quote"]["02. open"]}</span></li>
                    <li> current close price: <span>${res["Global Quote"]["05. price"]}</span></li>
                </ul>
                `;
                document.querySelector('.results').innerHTML = symbolView;
            }
        })
    })
})