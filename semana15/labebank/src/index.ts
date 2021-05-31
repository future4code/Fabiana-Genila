import express, { Request, Response } from 'express'
import cors from 'cors'

enum DOCUMENT_TYPE {
  CPF = 11111111111
}

type User = {
  cpf: number,
  name: string,
  birthdayDate: string,
  bankBalance: number
}

type BankStatement = {
    value: number,
    date: string,
    description: string
}

let bankStatement: BankStatement[] = [{
    value: 20,
    date: "21-05-2021",
    description: "extrato bancário do mês"
}]

let users: User[] = [
    {
        cpf: DOCUMENT_TYPE.CPF,
        name: "Fabiana",
        birthdayDate: "11/02/2021",
        bankBalance: 100
    }
]

const app = express()
app.use(express.json())
app.use(cors())

app.post("/users", (req: Request, res: Response) => {
    try {
        const {cpf, name, birthdayDate, bankBalance} = req.body
        const newUser: User = {
            cpf,
            name,
            birthdayDate,
            bankBalance
        }

        const ano_atual = new Date().getFullYear();
        const data_aniversario = birthdayDate;
        const ano_informado = data_aniversario.split('/')[2];
        const dateResult = ano_atual - ano_informado


        if(dateResult >= 18) {
            users.push(newUser)
        } else {
            throw new Error("Você deve ter mais de 18 anos para abrir uma conta")
        }

    res.status(200).send({
        message: "Usuário criado com sucesso!",
        user: newUser
    })    
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try {
        if(!users.length) {
            throw new Error("Usuário não encontrado")
        }

    res.status(200).send(users)    
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get("/users/search", (req: Request, res: Response) => {
    try {
        const cpf = Number(req.query.cpf)
        // const result = users.filter(user => user.cpf as number)

        if(isNaN(cpf)) {
            throw new Error("CPF deve ter somente números")
        }
        
        const result = bankStatement

    res.status(200).send(result)    
    } catch(err) {
        res.status(400).send({
            message: err.message
        })
    }
})
  
  app.listen(3003, () => {
    console.log('Server is running at port 3003')
  })

