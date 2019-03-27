// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// users array
var usersList = [
    {
        id: 1,
        name: 'Mukesh Chapagain',
        age: 99,
        email: 'mukesh@example.com'
    },
    {
        id: 2,
        name: 'Brad Pitt',
        age: 80,
        email: 'brad@example.com'
    },
    {
        id: 3,
        name: 'Steve Smith',
        age: 56,
        email: 'steve@example.com'
    },
    {
        id: 4,
        name: 'Darren Sammy',
        age: 48,
        email: 'sammy@example.com'
    }
];
 
// for users list page
app.get('/users', function(request, response){    
    /**
     * render to views/users.ejs template file
     * usersList is set to users variable
     */ 
    response.render('pages/users', {users: usersList});
});
 
// for individual user page
app.get('/user/:id', function(request, response){    
    /** 
     * Get the individual user details using request param ID
     * 
     * We use array.filter() function for this purpose
     * 
     * filter() is a Javascript function that creates a new array with elements 
     * that satisfies the conditions present in the callback function
     */ 
    var singleUser = usersList.filter(function(user){console.log(user.id); return user.id == request.params.id});
    
    /** 
     * The filter creates a new array with single user element
     * Hence, getting the value of the first and only element
     */ 
    var singleUser = singleUser[0];
    
    /**
     * render to views/user.ejs template file
     * name, age & email variables are passed to the template
     */ 
    response.render('pages/user', {
        name: singleUser.name, 
        age: singleUser.age,
        email: singleUser.email
    });
});
// index page
app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3, hope:10 },
        { name: 'Martini', drunkness: 5, hope:25 },
        { name: 'Scotch', drunkness: 10, hope:100 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index',{
        drinks: drinks,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
