import express from 'express';
import cors from 'cors';


import auth from './routes/jwtAuth.js'

import userData from './routes/userData.js'


const app = express();


// middleware
app.use(cors());
app.use(express.json());

// ROUTES


app.use("/auth", auth);

app.use("/userData", userData);

app.listen(5000, () => {
    console.log('listening on port 5000');
});