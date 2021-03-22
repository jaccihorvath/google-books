import axios from 'axios';

export default {
    //all books
    googleBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },

    //all books from database
    allBooks: function () {
        return axios.get('/api/books');
    },

    //specific book
    oneBook: function (id) {
        return axios.get('/api/books/' + id);
    },

    //delete book
    deleteBook: function (id) {
        return axios.delete('/api/books/' + id);
    },

    //save book
    saveBook: function (savedBooks) {
        return axios.post('/api/books', savedBooks)
    }
};