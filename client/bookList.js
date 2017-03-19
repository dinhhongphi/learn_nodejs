import { Task } from '../lib/collections/books.js';

Template.bookList.helpers({
    getBooks: function () {
        return Task.find({}).fetch();
    }
});