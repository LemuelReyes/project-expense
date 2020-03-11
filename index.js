const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.use('/', express.static('public'));
app.use(express.urlencoded({extended: false}))


app.get('/', function(req, res){
    res.render('index')
})

app.post('/budget', function(req, res){
    console.log(req.body.budget)
    res.send(`Your budget is ${req.body.budget}`)
})

app.post('/expense-minus', function(req, res){
    console.log(req.body.expenseName, req.body.expenseAmount)
    
    res.send(`Thanks for submitting`)
})

app.listen(3000, console.log(`app is running on ${3000}`))