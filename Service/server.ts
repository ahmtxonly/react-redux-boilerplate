import express, {Express, Request, Response} from 'express';

const cors = require('cors');

const app: Express = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const user = {
    username: "test",
    password: "test"
}

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, welcome to boilerplate api service');
});


app.post('/login', (req: Request, res: Response) => {
    if (req.body.username === user.username && req.body.password === user.password) {
        res.json({
            status: "success",
            message: "login success"
        });
    } else {
        res.status(400).json({
            status: "error",
            message: "login failed"
        });
    }

});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
