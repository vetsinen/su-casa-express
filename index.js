const express = require('express')
const path = require("path");
const nunjucks = require("nunjucks");
const axios = require('axios');

const app = express()
const port = 8080

// set the view engine to ejs
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(express.static( path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    const data = ['fdfsdf','4fsdf44','vndssxgs','jxgwxhww']
    axios.get('https://event-editor-6oghn.ondigitalocean.app/parties')
        .then(response => {
            console.log(response.data);
            res.render('index.html', {data:response.data});
        })
        .catch(error => {
            console.log(error);
        });

    // res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})