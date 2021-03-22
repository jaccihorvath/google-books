import React, { Component } from 'react';
import API from '../utils/API';
import SearchBar from '../components/SearchBar';
import Results from '../components/Results';


const styles = {
    jumbotron: {
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: "white"
    }
}


class Search extends Component {

    state = {
        search: "Search by title or author",
        books: [],
        error: ""
    };

    handleInputChange = (e) => {
        this.setState({ search: e.target.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        API.googleBooks(this.state.search)
            .then((res) => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                    
                } else {
                    let results = res.data.items;
                    console.log(results);
                    results = results.map((books) => {
                        books = {
                            key: books.id,
                            id: books.id,
                            title: books.volumeInfo.title,
                            authors: books.volumeInfo.authors,
                            description: books.volumeInfo.description,
                            image: books.volumeInfo.imageLinks.thumbnail,
                            link: books.volumeInfo.infoLink,
                            button: "Save"
                        };
                        return books;
                    });
                    this.setState({ books: results, error: "" });
                    
                }
            }).catch((err) => this.setState({ error: err.items }));
    };

    saveBook = (e) => {
        e.preventDefault();

        let savedBooks = this.state.books.filter((saved) => saved.id === e.target.id);

        API.saveBook(savedBooks)
            .then(this.setState({
                books: this.state.books.map(saved => {
                    if (saved.id === e.target.id) {
                        return {
                            ...saved, button: "Saved!"
                        }
                    } else {
                        return saved;
                    }
                })
            })).catch((err) => console.log("error!", err));
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center" style={styles.jumbotron}>
                    <h1 className="display-4">Google Books</h1>
                    <p className="lead">Find and save your favorite books!</p>
                    <hr className="my-4"/>
                    
                    <SearchBar
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}/>

                    <div className="row">
                        <Results
                            books={this.state.books}
                            saveBook={this.saveBook}/>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
        
    
}

export default Search;