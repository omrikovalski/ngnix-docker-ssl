const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello From local host'));
app.listen(4200, () => console.log('Listening on port 4000!'));