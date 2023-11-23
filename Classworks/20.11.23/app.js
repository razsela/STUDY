const dal = require('./dal.js')
const express = require('express')
const body_parser = require('body-parser')

const app = express()
const port = 3000
app.use(body_parser.json())

app.get('/api/users', (request, response) => {
    // response.json(get())
    console.log('someone did GET for /api/users URL');
})
app.get('/api/users/:id', (request, response) => {
    const user_id = parseInt(request.params.id)
    const user = get_by_id(user_id)
    if (user) { 
        response.json(user)
    }
    else {
        response.status(404).json({ "error": `cannot find user with id ${user_id}`})
    }
})
app.post('/api/users', (request, response) => {
 const new_user = request.body
const updated_user = crud.post(new_user)
response.json(updated_user)
})
app.put('/api/users/:id', (request, response) => {
  const user_id = parseInt(request.params.id)
  const new_id = 13
  const updated_user = crud.put(new_id)
 response.json(updated_user)
 })
 app.patch('/api/users/:id', (request, response) => {
  const user_id = parseInt(request.params.id)
  const new_id = 13
  const updated_user = crud.patch(new_id)
 response.json(updated_user)
 })
 app.delete('/api/users/:id', (request, response) => {

  
 })

app.listen(port, () => {
    console.log('Express server is running ....');
})


async function go() {
    const employees = await dal.get_all()
    console.log(employees);
    const employee = await dal.get_by_id(1)
    console.log(employee);
 
}
  

// get_all()
// console.log(get_by_id(1));
// console.log('mmm');