import React from "react";

function SearchBox() {
    return (
        <div className = "searchbox">
            <form>
                <input 
                className = "form-control"
                type = "search"
                placeholder = "Search employee"
                aria-label = "search"
                //onChange, handleSearch,Change
                />


            </form>

        </div>
    )
}

//.map method

export default SearchBox;
