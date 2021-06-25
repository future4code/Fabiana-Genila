import { app } from "./controller/app"
import { userRouter } from "./routes/userRouter"
import { postRouter } from "./routes/postRouter"

app.use('/user', userRouter);
app.use('/post', postRouter);