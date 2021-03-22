import React from 'react';


const Results = (props) => {
    return (
        <div className="container">
            {props.books.map((book) => 
                <div className="card mb-3 mr-3 ml-3 bg-transparent">
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img
                            className="img-fluid mt-3 card-image"
                            src={book.image}
                            alt={book.title} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h3 className="card-title text-left">{book.title}</h3>
                            <p className="card-text text-left"><small className="text-muted">By {book.authors}</small></p>
                                <p className="card-text font-italic text-left">{book.description}</p>

                                <p className="text-left">
                                <a
                                    href={book.link}
                                    target="_blank"
                                    rel="noreferrer">
                                        Learn more
                                    </a></p>
                        </div>
                    </div>
    
                    <button
                        className="btn btn-sm btn-secondary ml-auto mr-3 mb-3"
                        id={book.id}
                        onClick={(e) => props.saveBook(e)}>
                            {book.button}
                        </button>
                </div>
                </div>
            
            )}
        
            </div>
    )
}

export default Results;