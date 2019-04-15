const _ = require('lodash');

const numbers = [1,2,3,4,5,6,7];

console.log("Print numers:");
_.each(numbers, (number, index) => {
    console.log("on index:"+index+" is:"+number);
    return number;
}) ;

process.exit(0);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))