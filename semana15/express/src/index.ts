import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { countries, CONTINENTS, country } from './countries';

const app: Express = express();

app.use(express.json());
app.use(cors());

//ENDPOINT 1
app.get('/countries/all', (req: Request, res: Response) => {
    //função .map para que o endpoint retorne apenas id e nome dos países
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res
    .status(200)
    .send(result);
});

//ENDPOINT 3
app.get('/countries/search', (req: Request, res: Response) => {

    try {

    let result: country[] = countries;

    if(req.query.name) {
        result = result.filter(country => country.name.includes(req.query.name as string))
    }

    if(req.query.capital) {
        result = result.filter(country => country.capital.includes(req.query.capital as string))
    }

    if(req.query.continent as CONTINENTS) {
        result = result.filter(country => country.continent.includes(req.query.continent as string))
    }

    if(!result.length) {
        throw new Error("No country found")
    }

    res.status(200).send(result)

    } catch(err) {
        res.status(400).send({message: err.message})
    }

});



//ENDPOINT 2
app.get('/countries/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const result = countries.find
    (country => country.id === Number(req.params.id))

    if(result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
});


//ENDPOINT 4
app.put('/countries/edit/:id', (req: Request, res: Response) => {
    try {   
        if(isNaN(Number(req.params.id))) {
            throw new Error('Id must be a number')
        }

    const id = Number(req.params.id); 
    const editName = req.body.name;
    const editCapital = req.body.capital;


    let result = countries.find((country => country.id === id));
    if(!result) {
        throw new Error('Could not find a country with specified id')
    }

    const newResult: (country) = {
        id: result?.id as number,
        name: editName.name,
        capital: editCapital.capital,
        continent: result?.continent as CONTINENTS
    }

    if(!newResult) {
        throw new Error("Ocorreu um erro ao editar as informações")
    }
    
    res
    .status(200)
    .send(newResult);
       
    } catch(err){
        res.status(400).send({message: err.message});
    }
});


//sempre por último
app.listen(3003, () => {
    console.log('Server is running at http://localhost:3003');
});