const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const knex = require('./db/knex');


app.use(bodyParser.json());

app.get('/todos', async (req, res) => {
    try {
        let todosData = await knex.select().from('todos');
        res.send(todosData);
    } catch (err) {
        res.status(500).send({
            message: 'Server side Error !!!'
        });
    }
});

app.post('/todos', async (req, res) => {
    try {
      await knex('todos').insert({
        title:req.body.title,
        user_id:req.body.user_id
      });
      res.send({message:'Request processed successfully!'});
    } catch (err) {
        res.status(500).send({
            message: 'Server side Error !!!',
            err:err
        });
    }
});

app.get('/todos/:id',async(req,res)=>{
    try{
     let todoData=await knex.select().from('todos').where('id',req.params.id);
     res.send({
         message:'Request processed sucessfully !!',
         data:todoData
     });
    }catch(err){
        res.status(500).send({
            message: 'Server side Error !!!',
            err:err
        });
    }
});

app.put('/todos/:id',async(req,res)=>{
    try{

      await knex('todos').where('id',req.params.id).update({title:req.body.title,completed:req.body.completed})
        res.send({
            message:'Request processed sucessfully !!',
            //data:todoData
        });
    }catch(err){
        res.status(500).send({
            message: 'Server side Error !!!',
            err:err
        });
    }
});

app.delete('/todos/:id',async(req,res)=>{
    try{
        let todoDel= await knex('todos').where('id',req.params.id).del();
        res.send({
            message:'Request Processed sucessfully !',
            delResp:todoDel
        })

    }catch(err){
        res.status(500).send({
            message: 'Server side Error !!!',
            err:err
        }); 
    }
})

app.listen(port, (err) => {
    if (err) console.error('Error while starting the server!!!!');
    else console.info(`Server running on the port ${port}`)
})