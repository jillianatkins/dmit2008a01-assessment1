function SearchController (model, searchView, resultsView){
    this.model = model;
    this.searchView = searchView;
    this.resultsView = resultsView;


    this.configUI = async function () {
        this.searchView.view.addEventListener('submit', this.onHandleSubmit)

    }

    this.onHandleSubmit = async (e) =>{
        e.preventDefault();
        const searchParams = e.currentTarget.searchTerm.value
        const symbolSearch = await this.model.search(searchParams)
        this.resultsView.renderSymbols(symbolSearch)
    }

    this.configUI();

    return this;
}

export default SearchController;