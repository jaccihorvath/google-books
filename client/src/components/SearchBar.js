import React from 'react';

const styles = {
    input: {
        maxWidth: "90%"
    }
}

const SearchBar = (props) => {
    return (
        <form>
            <div className="form-group row">
                <input
                    className="form-control mx-auto input"
                    value={props.search}
                    type="text"
                    name="search"
                    placeholder="Search by title or author"
                    onChange={props.handleInputChange}
                    style={styles.input}/>
            </div>

            <div className="form-group row col-auto justify-content-end">
                <button
                    className="btn btn-secondary btn-sm mb-2"
                    type="submit"
                    onClick={props.handleFormSubmit}>
                        Search Book
                    </button>
            </div>
        </form>
    )
}

export default SearchBar;