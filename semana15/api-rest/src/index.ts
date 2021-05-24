import express, { Request, Response } from 'express'
import cors from 'cors'

enum userType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: userType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: userType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: userType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: userType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: userType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: userType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: userType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

//RESPOSTAS EXERCICIO 2
//a.através de query params
//b.utilizando enum e query params. Para garantir uso de apenas os types nele, if para que 
//a procura pelo parametro seja feito com mauisculas, senao retorna erro
app.get("/users", (req: Request, res: Response) => {
  try {
    let result: User[] = users
    if(req.query.type === userType.NORMAL) {
      result = result.filter(user => user.type.toUpperCase().includes(req.query.type as string))
    } else if(req.query.type === userType.ADMIN) {
      result = result.filter(user => user.type.toUpperCase().includes(req.query.type as string))
    } else {
      throw new Error("Waited for query with uppercase characters, try searching again")
    }

    if(!result.length) {
      throw new Error("No user was found")
  }
    res.status(200).send(result)
  } catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})

//RESPOSTAS EXERCICIO 3
//a.através de query params
app.get("/users/search", (req: Request, res: Response) => {
  try {
    const name = req.query.name as string
    const result = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))

    res.status(200).send(result)
  } catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})

//RESPOSTAS EXERCÍCIO 1
//a. método GET
//b. /users/all
app.get("/users/all", (req: Request, res: Response) => {
  try {

    if(!users.length) {
      throw new Error("User not found")
    }

    res.status(200).send(users)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

//RESPOSTAS EXERCICIO 4
//a.o PUT continua criando usuários como o POST, porém, se mandar a
//requisição com o mesmo body, o POST vai gravar os mesmos dados, causando um 
//multiplicação do mesmo dado quantas vezes a requisição for feita
//b. conforme descrito acima, o método POST é bom para criação de novos dados, 
//mas deve ter cuidado pois ele não tem nenhuma trava para reconhecer que já 
//existem os mesmos dados no array de objetos.
//Já o PUT parece ter esta trava, podendo ser utilizado para criar novos dados 
//ou para somente atualizar os dados existentes. O POST pode ser utilizado, 
//contanto que se estabeleça validações para evitar multiplicação
//de dados iguais.
app.post("/users", (req: Request, res: Response) => {
  try {
    const {id, name, email, type, age} = req.body
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)

    res.status(200).send({
      message: "User created successfully",
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
    const {id, name, email, type, age} = req.body
    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)

    res.status(200).send({
      message: "User created successfully",
      user: newUser
    })
  } catch(err) {
    res.status(400).send({
      message: err.message
    })
  }
})
