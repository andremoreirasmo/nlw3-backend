import express from 'express'

import './database/connection'

const app = express()

app.use(express.json())

// Rota = conjunto
// Recurso = usuário

// Metodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// Query params: htpp://localhost:3333/users?search=diego
// Route params: htpp://localhost:3333/users/1 (identifcar um recurso)
// Body: htpp://localhost:3333/users/1 (identifcar um recurso)

app.get('/users', (request, response) => {
	return response.json({ message: "Hellow World" })
})

app.listen(3333)