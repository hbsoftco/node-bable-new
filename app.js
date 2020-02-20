import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.DB_PORT || 5003;
// Run the server!
const start = async () => {
    try {
        await app.listen(port);
        console.log(`Server run at http://localhost:${port}`);

    } catch (err) {
        throw err;
    }
}

start();