import React from "react";
import SearchIcon from '../../assets/images/search.svg'

import './search-bar.styles.scss'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <img src={SearchIcon} alt="search-icon" />
            <input type="text" placeholder="Search"/>
        </div>
    )
}

export default SearchBar