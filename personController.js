const pool = require('../db').pool;

exports.test = (req,res) => {
	res.send('Welcome');
}

exports.getPersons = (req,res) => {
    pool.query('SELECT * FROM person ORDER BY id ASC',(error,results) =>{
        if(error){
            throw error;
        }
        res.status(200).send(results);
        console.log(results);
    });
}

exports.getPersonById = (req,res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM person where id = $1', [id], (error,results)=> {
        if(error){
            throw error;
        }
        res.status(200).send(results);
        console.log(results);
    });
}

exports.createPerson = (req,res) => {
    const {name, addr} = req.body

    pool.query('INSERT INTO person (name,addr) values ($1,$2)',[name,addr], (error,results) =>{
        if(error){
            throw error;
        }
        res.status(201).send(`Person added with id: ${results.insertId}`);
        console.log(results);
    });
}

exports.updatePerson = (req,res) => {
    const id = parseInt(req.params.id);
    const {name, addr} = req.body;

    pool.query('UPDATE person SET name = $1, addr = $2 WHERE id =$3',[name, addr, id],(error,results) =>{
        if(error){
            throw error;
        }
        res.status(200).send(`Person modified with ID: ${id}`);
        console.log(results);
    });
}

exports.deletePerson = (req,res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM person where id = $1',[id],(error,results) => {
        if(error){
            throw error;
        }
        res.status(200).send(`Person delted with ID: ${id}`);
        console.log(results);
    });
}

/*
module.exports = {
    getPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson,
}
*/
