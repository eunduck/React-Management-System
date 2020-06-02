const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/api/customers', (req, res) => {
  setTimeout(function() {
  res.send([
    {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': '김은덕1',
        'age': '10대',
        'job': '중학생',
        'city': '서울'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '김은덕2',
        'age': '20대',
        'job': '입사자',
        'city': '서울'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '김은덕3',
        'age': '30대',
        'job': '직장인',
        'city': '서울'
      }
]);
}, 3000);
    
});

app.listen(port, () => console.log(`Listening on PORT ${port}`));