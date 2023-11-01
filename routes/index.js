var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Faculdade Unyleia-ENCURTADOR DE URL' });
});

function generateCode(){

  let text ='';
  const possible='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321';
  for(let i=0; i < 5; i++)
  text += possible.charAt(Math.floor(Math.random()* possible.length));
return text;
}



router.post ('/new', (req, res, next) => {
const url=req.body.url;
console.log(url);
const code=generateCode();

//res.send('http://localhost:3000' + code);
res.send("valendo nota");
})

module.exports = router;
