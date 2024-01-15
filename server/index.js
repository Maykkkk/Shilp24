import express from 'express';
import cors from 'cors';

import pool from './db.js'

import bcrypt from 'bcrypt';

const saltRounds = 10;

const app = express();


// middleware
app.use(cors());
app.use(express.json());

// ROUTES

app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        console.log(email, username, password);

        const hash = bcrypt.hashSync(password, saltRounds);

        await pool.query(
            "INSERT INTO users (email, username, pass_hash) VALUES ($1, $2, $3)",
            [email, username, hash]
        )
        res.send("Registered")
    } catch (error) {
        console.error(error.message);
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pool.query(
            "SELECT email, username, pass_hash FROM users WHERE email = $1",
            [email]
        )

        if(user.rowCount == 0){
            res.send("Email not found")
        }
        else{
            try {
                console.log(await bcrypt.compare(password, user.rows[0].pass_hash))
                if(await bcrypt.compare(password, user.rows[0].pass_hash)){
                    res.send(JSON.stringify({ username: user.rows[0].username}))
                }else{
                    res.send(JSON.stringify({ "Error": "Invalid password"}));
                }
            } catch (error) {
                console.error(error.message);
            }
        }


        // if(email)

        // res.send(req.body)
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
    console.log('listening on port 5000');
});