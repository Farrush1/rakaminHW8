var express = require('express');
var app = express ();
var pool = require('./queries.js');

app.get('/actor', function(req, res){
    pool.query(`SELECT * FROM actor`, function(err, result){
        if (err) throw err;
        res.json(result.rows)
    })
})

app.get('/film', function(req, res){
    pool.query(`SELECT * FROM film`, function(err, result){
        if (err) throw err;
        res.json(result.rows)
    })
})

app.get('/list-film/:id', function(req, res){
    pool.query(`SELECT * FROM film WHERE film_id = ${req.params.id}`, function(err, result){
        if (err) throw err;
        res.json(result.rows)
    })
})

app.get('/categories', function(req, res){
    pool.query(`SELECT * FROM category`, function(err, result){
        if (err) throw err;
        res.json(result.rows)
    })
})

app.get('/film-by-categories/:names', function(req, res){
    pool.query(`SELECT * FROM film JOIN film_category ON film.film_id = film_category.film_id JOIN category ON category.category_id = film_category.category_id WHERE category.name = '${req.params.names}'`, function(err, result){
        if (err) throw err;
        res.json(result.rows)
    })
})

app.get('/',function (req,res){
    res.send('hellods world')
});
app.listen(3000);