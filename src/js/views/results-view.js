import ejs from "ejs";

const symbolView = `
<aside class="symbol">
  <header><h3 class="symbolName"> <%= symbol.name %></h3></header>
   
  <ul class="details" >
  <li> opening price: <span><%= symbol.openingPrice %></span></li>
  <li> current close price: <span><%= symbol.currentClose %></span></li>
  <li> current date:<span><%= symbol.currentDate %></span></li>
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
