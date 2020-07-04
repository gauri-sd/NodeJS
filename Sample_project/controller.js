const mongoose = require('mongoose');
var personModel=require('./databaseConnection').person;

module.exports.get_all=function()
{
	personModel.find({}, function(err,users)
	{
		if (err) throw err;
		console.log(users);
	});
}

module.exports.get_one=function(id1)
{
	personModel.find({id:id1}, function(err,users)
	{
		if (err) throw err;
		console.log(users);
	});
}

module.exports.save=function(nm,addr,age,id)
{
	var gauri = personModel({
	name : nm,
	adress : addr,
	age : age,
	id : id
});

gauri.save(function(){
console.log('Person saved!!');
res.send('Person Saved!!');
});

console.log('Database After Adding One Entity');
personModel.find({}, function(err, users){
if (err) throw err;

console.log(users);
});
}

module.exports.find=function(id1,data)
{
	console.log('Database After Updation');
	personModel.update({id:id1},data, function(err,users)
	{
		if (err) throw err;
		console.log(users);
		console.log('Successfully updated!');
	});
}

module.exports.delete=function(id1)
{
	personModel.remove({id:id1}, function(err,users)
	{
		if (err) throw err;
		console.log(users);
		console.log('Deleted sucessfully!!');	
	});
}


