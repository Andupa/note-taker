const express = require('express');
const html_routes = require('./routes/html_routes');
const api_routes  = require('./routes/api_routes');
const PORT = process.env.PORT || 3003;
const app =  express();

app.use (express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.use(api_routes);
app.use(html_routes);

app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
});
