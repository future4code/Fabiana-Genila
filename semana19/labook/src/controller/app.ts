import cors from "cors"
import express from "express"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server running on port 3003")
 })