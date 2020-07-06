const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const {personRoutes} = require('./routes');

app.use('/person',personRoutes);

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true,}));

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
