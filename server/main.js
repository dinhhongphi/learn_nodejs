import { Meteor } from 'meteor/meteor';
import { Task } from '../lib/collections/books.js';

Meteor.startup(() => {
    if (!Task.findOne()) {
        Task.insert({ title: "To Kill a Mockingbird", author: "Harper Lee" });
        Task.insert({ title: "1984", author: "George Orwell" });
        Task.insert({ title: "The Lord of the Rings", author: "J. R. R. Tolkien" });
        Task.insert({ title: "The Catcher in the Rye", author: "J. D. Salinger" });
        Task.insert({ title: "The Great Gatsby", author: "F. Scott Fitzgerald" });
    }
});
