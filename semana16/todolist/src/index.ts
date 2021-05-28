import cors from "cors";
import express, {Request, Response} from "express";
import {AddressInfo} from 'net';
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

type User = {
    name: string,
    nickname: string,
    email: string
}

let users: User[] = []


app.put('/todolist/users/:id', async (req, res) => {
    try {

        await connection("toDoList")
        .update({ 
            name: req.body.name,
            salary: req.body.salary,
            gender: req.body.gender
        })
        .where({ id: req.params.id })
        
        res.status(200).send()

    } catch (error) {
        console.log(error.mysqlMessage)
        res.status(400).send({
            err: error.mysqlMessage
        })
    }
    
});


app.get('/', async (req, res) => {
    try { 

        await connection.raw(`
        SELECT * FROM TodoListUser;
        `);

        res.status(200).send("success")
    } catch (error) {
        res.status(400).send({
            error: error.mysqlMessage
        })
    }
});

app.post('/', async (req, res) => {
    try { 


        res.status(200).send({})
    } catch (error) {
        res.status(400).send({})
    }
});

//Criar usuário 
app.put('/userss', async (req, res) => {
    try {

        await connection("ToDoList")
        .update({ 
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        })
        
        res.status(200).send("User created!")

    } catch (error) {
        console.log(error.mysqlMessage)
        res.status(400).send({
            err: error.mysqlMessage
        })
    }
});

app.put('/user', async (req: Request, res: Response) => {
    try {

        if(!req.body.name) {
            throw new Error("'name' is required")
        }

        await connection.raw(`
            INSERT INTO ToDoListUser (name, nickname, email)
            VALUES (
                "${req.body.name}",
                "${req.body.nickname}",
                "${req.body.email}"
            )
        `)

        res.status(200).send("User created!")

    } catch (error) {
        console.log(error.mysqlMessage)
        res.status(400).send({
            err: error.mysqlMessage
        })
    }
});


const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error('Failure upon starting server');
    }
});