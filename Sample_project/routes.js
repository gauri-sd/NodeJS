var express= require('express');
var controller=require('./controller');
var app=express();
var p=require('./databaseConnection');
bodyParser  = require('body-parser');

app.use(express.json());

app.get('/api/person', (req, res) => {
  controller.get_all();
});

app.get('/api/person/:id', (req, res) => {
	var id = req.params.id;
	controller.get_one(id);
});

app.post('/api/person', (req, res) => {
	var nm=req.body.name;
	var addr=req.body.addr;	
	var age=req.body.age;
	var id=req.body.id;
	controller.save(nm,addr,age,id);
});

app.put('/api/person/:id', (req, res) => {
	var id= req.params.id;
	var data = {
			name : req.body.name,
			addr : req.body.addr,
			age : req.body.age
		} 
		controller.find(id,data);
});

app.delete('/api/person/:id', (req, res) => {
  var id = req.params.id;
  controller.delete(id);
});

var port= process.env.PORT || 3008;
app.listen(port, () => console.log(`Listening on port ${port}...`));

