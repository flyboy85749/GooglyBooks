import React from 'react';

const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBooks} action="">
                <input onChange={props.handleSearch} type="text" />
                <button type="submit">Googly It!</button>
            </form>
        </div>
    )
}

export default SearchArea;