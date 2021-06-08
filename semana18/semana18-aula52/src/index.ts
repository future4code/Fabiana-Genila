import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login";
import { compareHash, createHash } from "./services/hashManager";
import userProfile from "./endpoints/userProfile";
import getUserById from "./endpoints/getUserById";
import deleteUser from "./endpoints/deleteUser";

app.post('/user/signup', createUser);
app.post('/user/login', login);
app.put('/user/edit/', editUser);

app.get('/user/profile', userProfile);
app.get('/user', getUserById);

app.delete('/user/:id', deleteUser);