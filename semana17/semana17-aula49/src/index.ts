import express, { Express, Request, Response } from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"
import { teacher } from "./types/teacher"

dotenv.config()

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA
   }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

// //search recipes (FILTRO, ORDENAÇÃO e PAGINAÇÃO)
// app.get("/recipes/all", async function (
//    req: Request,
//    res: Response
// ): Promise<void> {
//    try {
//       const result = await connection.raw(`
//          SELECT title, name AS "author", description
//          FROM recipes_aula48
//          JOIN users_aula48 
//          ON user_id = users_aula48.id;
//       `)

//       const teachers: teacher[] = result[0]

//       if(!teachers.length){
//          res.statusCode = 404
//          throw new Error("No recipes found")
//       }

//       res.status(200).send()
      
//    } catch (error) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// })

// app.get('/recipes/search', async (req: Request, res: Response) => {
//    try {

//       const title = req.query.title as string
//       const orderBy = req.query.orderBy as string || "title"
//       const orderType = req.query.orderType as string || "ASC"
//       const page = Number(req.query.page) || 1

//       if(!title || !orderBy || !orderType) {
//          res.statusCode = 400
//          throw new Error("Missing one or more queries: 'title' or 'orderBy' or 'orderType'")
//       }

//       // //query builds
//       // const recipes: recipe[] = await connection('recipes_aula48')
//       // .select('title', 'name AS author', 'description')
//       // .join('users_aula48', 'user_id', '=', 'users_aula48.id')
//       // .where('title', 'like', `%${title}%`)
//       // .orderBy(orderBy, orderType)

//       const result = await connection.raw(`
//          SELECT title, name AS "author", description
//          FROM recipes_aula48
//          JOIN users_aula48 
//          ON user_id = users_aula48.id
//          WHERE title LIKE '%${title}%'
//          ORDER BY ${orderBy} ${orderType.toUpperCase()}
//          LIMIT 5
//          OFFSET ${5 * (page - 1)};
//       `)

//       const teachers: teacher[] = result[0]

//       if(!teachers.length){
//          res.statusCode = 404
//          throw new Error("No teacher found")
//       }

//       res.status(200).send({
//          teachers
//       })

//    }  catch (error) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// })

//Filtragem por nome
app.get('/teachers/search', async (req: Request, res: Response) => {
   try {

      const name = req.query.name as string

      if(!name) {
         res.statusCode = 400
         throw new Error("Missing one query: 'name'")
      }

      const result = await connection.raw(`
         SELECT name
         FROM aula48_exercicio
         WHERE name LIKE '%${name}%'
      `)

      const teachers: teacher[] = result[0]

      if(!teachers.length){
         res.statusCode = 404
         throw new Error("No teacher found")
      }

      res.status(200).send({
         teachers
      })

   }  catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

//Filtragem por tipo user
app.get('/teachers/:type', async (req: Request, res: Response) => {
   try {
      const type = req.params.type as string || 'Teacher' || 'CX' || 'Operations'

      if(!type) {
         res.statusCode = 400
         throw new Error("Missing user type")
      }

      const result = await connection.raw(`
         SELECT name,type
         FROM aula48_exercicio
         WHERE type LIKE '%${type}%';
      `)

      const teachers: teacher[] = result[0]

      if(!teachers.length){
         res.statusCode = 404
         throw new Error("No teacher found")
      }

      res.status(200).send({
         teachers
      })

   }  catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

//Ordenar por tipo user ou nome, crescente. Sem dados, retorna email
app.get('/teachers/search/ordered', async (req: Request, res: Response) => {
   try {

      const name = req.query.name as string
      const type = req.query.type as string
      const orderType = req.query.orderType as string || 'ASC'
      const orderBy = req.query.orderBy as string || 'name' || 'type'

      const result = await connection.raw(`
         SELECT name, type, email
         FROM aula48_exercicio
         WHERE name LIKE '%${name}%' AND type LIKE '%${type}%'
         ORDER BY ${orderBy} ${orderType};
      `)

      if(!req.query.name || !req.query.type) {
         const filtered = result.map((teacher: { email: any }) => 
            teacher.email,
         )
         console.log(filtered)
         res.status(201).send(filtered)
      } else {
         res.statusCode = 400
         throw new Error("Something is wrong")
      }

      const teachers: teacher[] = result[0]

      if(!teachers.length){
         res.statusCode = 404
         throw new Error("No teacher found")
      }

      res.status(200).send({
         teachers
      })

   }  catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
})

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})
