import AlphaVantageModel from "./models/alphavantage";

const model = new AlphaVantageModel();

window.addEventListener('load', function(e){
    const searchURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=G2L4WF5QLHADE4S3&symbol="

    async function getData (symbol){
        const url = searchURL + symbol;
        const req = await fetch(url)
        const result = await req.json()
        console.log(result)
    }

    getData('ibm')

})

