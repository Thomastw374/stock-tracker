import Search from "../Search/Search";
import "./HeaderContainer.scss"

const HeaderContainer = ({handleSearchInput}) => {
    return(
        <div className="header">
            <h1 className="header__title">TICKR</h1>
            <Search handleSearchInput={handleSearchInput}/>
        </div>
    )
}

export default HeaderContainer; 