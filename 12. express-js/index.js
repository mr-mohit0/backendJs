const express = require('express');
const app = express();
const port = 3000;
app.get('/login', (req, res) => {
    // console.log(req,'\t');
    console.log(res);

    res.send('test complete ! ');
});
app.listen(port, () => {
    console.log('server started => \n');
    console.log(`http://localhost:${port}/login`);
});