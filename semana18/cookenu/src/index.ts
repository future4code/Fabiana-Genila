import app from "./app"
import createUser from './endpoints/createUser'
import login from "./endpoints/login";
import resetPassword from "./endpoints/resetPassword";
import createRecipe from "./endpoints/createRecipe";
import getRecipeById from "./endpoints/getRecipeById";
import getUserById from "./endpoints/getUserById";
import getSelfId from "./endpoints/getSelfId";
import editRecipe from "./endpoints/editRecipe";
import deleteRecipe from "./endpoints/deleteRecipe";
// import { compareHash, createHash } from "./services/hashManager";

app.post('/user/signup', createUser);
app.post('/user/login', login);
app.post('/recipe', createRecipe);
app.post('/user/password/reset', resetPassword);

app.put('/user/recipe/edit/:id', editRecipe);

app.get('/recipe/:id', getRecipeById);
app.get('/user/:id', getUserById);
app.get('/user/profile', getSelfId);

app.delete('/user/recipe/:id', deleteRecipe);


// getAddressInfo("05424150").then(console.log);

// const hash1 = createHash("senha")
// const hash2 = createHash("senha")

// const compare1 = compareHash(hash1, hash1)
// const compare2 = compareHash("senha", hash2)

// console.log({hash1, hash2, compare1, compare2});
