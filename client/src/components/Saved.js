import React from 'react';


const Saved = (props) => {
    return (
        <div className="container">
            {props.savedBooks.map((saved) => {
                return (
                    <div className="card mb-3 mr-3 ml-3 bg-transparent">
                        <div className="row no-gutters">
                            <div className="col-md-3">
                                <img
                                    className="img-fluid mt-3 card-image"
                                    src={saved.image}
                                    alt={saved.title} />
                            </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <h3 className="card-title text-left">{saved.title}</h3>
                                <p className="card-text text-left"><small className="text-muted">By {saved.authors}</small></p>
                                <p className="card-text font-italic text-left">{saved.description}</p>
    
                                <p className="text-left">
                                    <a
                                        href={saved.link}
                                        target="_blank"
                                        rel="noreferrer">
                                            Learn more
                                    </a>
                                </p>
                            </div>
                        </div>
        
                            <button
                                className="btn btn-sm btn-danger ml-auto mr-3 mb-3"
                                id={saved._id}
                                onClick={() => props.deleteBook(saved._id)}>
                                    Delete
                            </button>
                        </div>
                    </div>
                )
            }
               
            
            )}
        
            </div>
    )
}

export default Saved;