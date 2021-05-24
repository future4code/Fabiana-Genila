//EXERCICIO FEITO EM AULA!!! SOMENTE EXEMPLO!!!
import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//Query params :id
app.get("/users", (req: Request, res: Response) => {
  try {
    const id = Number(req.query.id)

    if(isNaN(id)) {
      throw new Error("Id must be a number")
    }

    const result = users.filter((user) => user.id === id)

    if(!result.length) {
      throw new Error("User not found")
    }

    res.status(200).send(result)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

//Path params :id
app.get("/users/:id", (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    if(isNaN(id)) {
      throw new Error("Id must be passed and must be number")
    }

    const result = users.filter((user) => user.id === id)

    if(!result.length) {
      throw new Error("User not found")
    }

    res.status(200).send(result)
  } catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})

app.post("/users", (req: Request, res: Response) => {
  try {
    //body não precisa transformar de string pra number
    const id = req.body.id
    const name = req.body.name
    const email = req.body.email
    const type = req.body.type
    const age = req.body.age

    //pode ser abreviado ou id:id, name:name e etc
    const newUser = {
      id,
      name, 
      email,
      type,
      age
    }

    users.push(newUser)



    res.status(200).send({
      message: "ok",
      user: newUser
    })
  } catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})

app.put("/users", (req: Request, res: Response) => {
  try {
    // const body = req.body
    // console.log(body)
    //desestruturado
    const {id, name, email, type, age} = req.body
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)

    res.status(200).send("user created sucessfully")
  } catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})

app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const params = req.params
    const id = Number(req.params.id)

    //users => user === id => remove
    //resposta => deu tudo certo / usuario não encontrado
  } catch(err) {
    message: err.message
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


