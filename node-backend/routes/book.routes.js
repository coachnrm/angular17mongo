const express = require('express');
const app = express();

const bookRoute = express.Router();
let Book = require('../model/Book');

// Add book
bookRoute.route('/add-book').post(async (req, res, next) => {
    //Book.create(req.body, (error, data) => {
        //if (error) {
            //return next(error);
        //} else {
            //res.json(data)
        //}
    //})

    let insertData = await Book.create(req.body);
    res.json(insertData)
})

// Get all book
bookRoute.route('/').get(async (req, res) => {
    //Book.find((error, data) => {
        //if (error) {
            //return next(error);
        //} else {
            //res.json(data);
        //}
    //})

   let books = await Book.find({})
   res.json(books);
})

// Get book
bookRoute.route('/read-book/:id').get(async (req, res) => {
    //Book.findById(req.params.id, (error, data) => {
        //if (error) {
            //return next(error);
        //} else {
            //res.json(data);
        //}
    //})

    let singleBook = await Book.findById(req.params.id);
    res.json(singleBook) 
})

// Update book
bookRoute.route('/update-book/:id').put(async (req, res, next) => {
    //Book.findByIdAndUpdate(req.params.id, {
        //$set: req.body
    //}, (error, data) => {
        //if (error) {
            //return next(error);
            //console.log(error);
        //} else {
            //res.json(data);
            //console.log('Book Updated Successfully');
        //}
    //})

    let updateData = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json(updateData);
})

// Delete book
bookRoute.route('/delete-book/:id').delete(async (req, res, next) => {
    //Book.findByIdAndRemove(req.params.id, (error, data) => {
        //if (error) {
            //return next(error);
        //} else {
            //res.status(200).json({
                //msg: data
            //});
        //}
    //})

    let deleteData = await Book.findByIdAndDelete(req.params.id);
    res.json(deleteData);
})

module.exports = bookRoute;