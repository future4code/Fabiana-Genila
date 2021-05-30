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

type Task = {
    title: string,
    description: string,
    limit_date: string,
    creatorUserId: number
}

type All = {
    name: string,
    nickname: string,
    email: string,
    title: string,
    description: string,
    limit_date: string,
    creatorUserId: number,
    status: string,
    creator_user_id: string,
    limitDate: string
}

interface Date {
    toLocaleDateString(): string
}

//All users
app.get('/user', async (req, res) => {
    try { 

        const result = await connection("TodoListUser");

        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: error.mysqlMessage
        })
    }
});

//Criar usuário 
app.put('/user', async (req: Request, res: Response) => {
    try {

        if(!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Empty fields are not allowed. Please fill the information accordingly.")
        }

        const newUser = {
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        await connection("TodoListUser")
        .insert(newUser)

        res.status(201).send({
            message: "User created!",
            newUser: newUser
        })

    } catch (error) {
        console.log(error)
        res.status(400).send({
            err: error.mysqlMessage
        })
    }
});

//Pegar usuário pelo id
app.get('/user/:id', async (req, res) => {
    try { 
        const name = req.body.name as string;
        const id = Number(req.params.id);

        if(isNaN(id)) {
            throw new Error("ID is required")
        }

        const userById = await connection("TodoListUser")
        .where({id: req.params.id})

        const result = userById.map(user => {
            return {id: req.params.id, name: user.name}
        })

        if(!result.length) {
            throw new Error("User not found")
        }

        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: error.mysqlMessage
        })
    }
});

//Editar usuário
app.post('/user/edit/:id', async (req, res) => {
    try { 
        const name = req.body.name as string;
        const nickname = req.body.nickname as string;
        const id = Number(req.params.id);

        if(isNaN(id)) {
            throw new Error("ID is required")
        }

        if(!req.body.name || !req.body.nickname) {
            throw new Error("Empty fields are not allowed. Please fill the information accordingly.")
        }

        const newUser = {
            name: req.body.name,
            nickname: req.body.nickname
        }

        if(req.body.email){
            throw new Error("email is not required")
        }

        const insertUser = await connection("TodoListUser")
        .update(newUser)
        .from("TodoListUser")
        .where({id: req.params.id})

        
        const userById = await connection("TodoListUser")
        .where({id: req.params.id})

        const result = userById.map(user => {
            return {id: user.id, name: user.name, nickname: user.nickname}
        })

        if(!result.length) {
            throw new Error("User not found")
        }

        res.status(200).send(result)
        console.log(insertUser)
    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: error.message
        })
    }
});

//Criar tarefa 
app.put('/task', async (req: Request, res: Response) => {
    try {

        if(!req.body.title || !req.body.description || !req.body.limit_date || !req.body.creatorUserId) {
            throw new Error("Empty fields are not allowed. Please fill the information accordingly.")
        }

        const newTask = {
            title: req.body.title,
            description: req.body.description,
            limit_date: req.body.limit_date,
            creator_user_id: req.body.creatorUserId
        }

        await connection("TodoListTask")
        .insert(newTask)

        const formatDateTask = await connection.raw(`
        SELECT*,
        DATE_FORMAT (limit_date, "%d/%m/%Y")
        AS limitDate FROM TodoListTask;
        `)

        res.status(201).send({
            message: "Task created!",
            newUser: formatDateTask[0]
        })

    } catch (error) {
        console.log(error)
        res.status(400).send({
            err: error.message
        })
    }
});

//Pegar tarefa pelo id
app.get('/task/:id', async (req, res) => {
    try { 
        const id = Number(req.params.id);

        if(isNaN(id)) {
            throw new Error("ID is required")
        }

        const taskById = await connection("TodoListUser")
        .where({id: req.params.id})

        const [allInfo] = await connection.raw(`
        SELECT *,
        DATE_FORMAT (limit_date, "%d/%m/%Y")
        AS limitDate FROM TodoListTask
        JOIN TodoListUser
        ON TodoListTask.id = TodoListUser.id;
        `);


        const result = allInfo.map((task:All) => {
            return {
                id: req.params.id, 
                title: task.title,
                description: task.description,
                limitDate: task.limitDate,
                status: task.status,
                creatorUserId: task.creator_user_id,
                creatorUserNickname: task.nickname
            }
        })

        if(!result.length) {
            throw new Error("Task not found")
        }

        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send({
            error: error.message
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
