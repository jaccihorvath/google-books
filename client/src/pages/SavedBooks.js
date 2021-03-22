import React, { Component } from 'react';
import API from '../utils/API';
import Saved from '../components/Saved';


const styles = {
    jumbotron: {
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: "white"
    }
}


class SavedBooks extends Component {

    state = {
        savedBooks: [],
    };

    componentDidMount() {
        API.allBooks()
            .then((res) => this.setState({ savedBooks: res.data }))
            .catch((err) => console.log(err));
    }


    deleteBook = (id) => {
        API.deleteBook(id)
            .then((res) => this.componentDidMount())
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center" style={styles.jumbotron}>
                    <h1 className="display-4">Google Books</h1>
                    <p className="lead">Find and save your favorite books!</p>
                    <hr className="my-4"/>
                    

                    <div className="row">
                        <Saved
                            savedBooks={this.state.savedBooks}
                            deleteBook={this.deleteBook}/>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
        
    
}

export default SavedBooks;