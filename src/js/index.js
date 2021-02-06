import AlphaVantageModel from "./models/alphavantage";

const model = new AlphaVantageModel();

window.addEventListener('load', function(e){
    const searchURL = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&apikey=G2L4WF5QLHADE4S3&keywords="

    async function getData (symbol){
        const url = searchURL + symbol;
        const req = await fetch(url)
        const result = await req.json()
        console.log(result)
    }

    getData('ibm')

})

