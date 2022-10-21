

const Search = ({handleSearchInput}) => {
    return(
        <div>
            <input type="search" name="stock-search" id="" onInput={handleSearchInput}/>
        </div>
    )
}

export default Search;