// function SearchController (model, searchView, resultsView){
//     this.model = model;
//     this.searchView = searchView;
//     this.resultsView = resultsView;


//     this.configUI = async function () {
//         this.searchView.view.addEventListener('submit', this.onHandleSubmit)

//     }

//     this.onHandleSubmit = async (e) =>{
//         e.preventDefault();
//         const searchParams = e.currentTarget.searchTerm.value
//         const symbolSearch = await this.model.search(searchParams)
//         this.resultsView.renderSymbols(symbolSearch)
//     }

//     this.configUI();

//     return this;
// }

// export default SearchController;

function SearchController(model, searchView, resultsView) {
    this.model = model;
    this.searchView = searchView;
    this.resultsView = resultsView;
    this.category = 'people'
  
    // configUI - this is the initial setup for the controller
    this.configUI = async function () {
      //submit event on the form
      this.searchView.view.addEventListener('submit', this.onHandleSubmit)

       
    };
  
    this.onHandleSubmit = async (e) =>{
      e.preventDefault();
      // combine our search
      // no validation
      const searchParams = {
        symbol:e.currentTarget.searchTerm.value
      }
      const symbolSearch = await this.model.search(searchParams)
      this.resultsView.renderSymbols(symbolSearch)
    }
  
    this.configUI();
  
    return this;
  }
  
  export default SearchController;