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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});