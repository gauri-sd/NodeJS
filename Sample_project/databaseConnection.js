var mongoose=require('mongoose')

var url='mongodb://localhost:27017/Task2'
mongoose.connect(url);

var Schema= mongoose.Schema;

var ps= new Schema(
{
	name : String,
	addr : String,
	age : Number,
	id : Number	
});

var person = mongoose.model("person",ps,"person");
module.exports= {person};


