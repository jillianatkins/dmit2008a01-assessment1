import ejs from "ejs";

const symbolView = `
<aside class="person">
  <header><h3 class="symbolName"></h3></header>
   
  <ul class="details" >
  <li> opening price: <span><%= 02. open %></span></li>
  <li> current close price: <span><%= 05. price %></span></li>
  
  </ul>

</aside>
`;

const noResultsView = `
<aside class="error">
  <header>
    <h3> There are no results matching this search</h3>
 <header>
</aside>
`;

function ResultsView(viewId) {
  this.container = document.querySelector(viewId);

  this.configUI = function (symbol) {
    const elem = ejs.render(symbolView, { symbol });
    this.container.insertAdjacentHTML("afterbegin", elem);
  };
  this.renderSymbols = function(symbol){
      this.removeChildElements()
      // check if the search returned nothing
      if(symbol.results.length === 0){
        const elem = ejs.render(noResultsView)
        this.container.insertAdjacentHTML('afterbegin', elem)
      }
      if(symbol.results.length !== 0){
        symbol.results.forEach(symbol=>{
          const elem = ejs.render(symbolView, {symbol:symbol})
          this.container.insertAdjacentHTML('afterbegin', elem)
        })
      }
  }

  this.removeChildElements = function(){
    this.container.querySelectorAll('aside').forEach(item=>{
      this.container.removeChild(item)
    })
  }
}

export default ResultsView;