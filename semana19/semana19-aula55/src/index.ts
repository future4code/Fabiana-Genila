import { app } from "./controller/app"
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import { deleteUser } from "./controller/user/deleteUser";
import { getAllUsers } from "./controller/user/getAllUsers";

app.post('/user/signup', signup);
app.post('/user/login', login);

app.get('/all', getAllUsers);

app.delete('/:id', deleteUser);


