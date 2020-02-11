const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');

const app = express();
const port = 5005;

app.listen(port, () => console.log(`listening on port ${port}`));

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// app.use('/api', router);

// var request = require('request');
// app.get('/:id', function(req,res) {
//   //modify the url in any way you want
//   const { id } = req.params;
//   var newurl = `http://localhost:3002/api/calendar/${id}`;
//   request(newurl).pipe(res);
// });

// app.get('/:id', function(req,res) {
//   //modify the url in any way you want
//   var newurl = 'http://localhost:3003';
//   request(newurl).pipe(res);
// });

// app.get('/', function(req, res){ 
//   request('http://localhost:3002', function (error, response, body) { 
//     if (!error && response.statusCode === 200) { 
//       console.log(body); 
//       res.send(body); 
//     } 
//    }); 
// });