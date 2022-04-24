const express = require('express')
const app = express()

app.use(express.json())

const port = 3000

app.get('/v1/explorers', (req, res)=>{
  console.log(`Api Explorers GET ALL request ${new Date()}`)
  const explorer1 = {id: 1, name: 'Jugo1'}
  const explorer2 = {id: 2, name: 'Jugo2'}
  const explorer3 = {id: 3, name: 'Jugo3'}
  const explorer4 = {id: 4, name: 'Jugo4'}
  const explorers = [explorer1, explorer2, explorer3, explorer4]
  res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res)=>{
  console.log(`Api explorers GET request ${new Date()}`)
  console.log(`Getting explorer with id ${req.params.id}`)
  const explorer = {id: 1, name: "Jugo"}
  res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res)=>{
  console.log(`Api Explorers POST request ${new Date()}`)
  const requestBode = req.body
  res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res)=>{
  console.log(`Api explorers PUT request ${new Date()}`)
  console.log(`Update explorer with id ${req.params.id}`)
  const requestBody = req.body
  res.status(200).json({message: "Updated!"})
})

app.delete('/v1/explorers/:id', (req, res)=>{
  console.log(`Api explorers PUT request ${new Date()}`)
  console.log(`Delete explorer with id ${req.params.id}`)
  const requestBody = req.body
  res.status(200).json({message: "Deleted"})
})

app.listen(port, ()=>{
  console.log('Example app listening on port ${port}')
})
