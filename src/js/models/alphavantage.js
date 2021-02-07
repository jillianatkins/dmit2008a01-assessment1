// Alpha Vantage base url: https://www.alphavantage.co/
// Query: query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=
// API key: G2L4WF5QLHADE4S3

function AlphaVantageModel(){
    this.apiBaseURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=G2L4WF5QLHADE4S3&symbol=";

    this.init = function (){
        const result = this.query("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=G2L4WF5QLHADE4S3&symbol=gme")
        return result;
    };

    this.query = async function (url) {
        const req = await fetch(url);
        const res = await req.json();
        return res;
    };

    this.search = async function (data){

        const {symbol} = {...data}
        let url = new URL(this.apiBaseURL + symbol)
        
        const req = await fetch(url)
        const res = await req.json()
        return res
    }

    return this;
}

export default AlphaVantageModel;