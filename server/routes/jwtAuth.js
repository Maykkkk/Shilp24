import { Router as expressRouter } from 'express';
const router = expressRouter();

import bcrypt from 'bcrypt';
const saltRounds = 10;

import pool from '../db.js'

import jwtGenerator from '../utils/jwtGenerator.js';
import validInfo from '../middleware/validInfo.js';
import authorization from '../middleware/authorization.js';

// Register
router.post('/register', validInfo, async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )
        if (user.rows.length != 0) {
            return res.status(401).json("User Already Exists")
        }

        // console.log(email, username, password);

        const hash = bcrypt.hashSync(password, saltRounds);

        const newUser = await pool.query(
            "INSERT INTO users (email, username, pass_hash) VALUES ($1, $2, $3) RETURNING *",
            [email, username, hash]
        )


        const token = jwtGenerator(newUser.rows[0].user_id);
        res.json({ token })


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

router.post('/login', validInfo, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )

        if (user.rowCount === 0) {
            return res.status(401).json("Password or Email is Incorrect")
        }
        const validPassword = await bcrypt.compare(password, user.rows[0].pass_hash)
        if (!validPassword) {
            return res.status(401).json("Password or Email is Incorrect")
        }
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({ token })


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})


router.get('/is-verify', authorization, (req, res) => {
    try {
        res.json(true)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

export default router;