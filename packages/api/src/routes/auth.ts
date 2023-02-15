import express from "express";
import pool from "../db";

const router = express.Router();

router.get("/", async (_req, res) => {
        //Query made just for testing connection to DB
        const {rows} = await pool.query('SELECT * FROM users')
        console.log(rows);
        res.send()
    }
)

export default router;