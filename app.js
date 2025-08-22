import express from 'express';
import {PORT} from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import blogRouter from "./routes/blog.routes.js";


const app = express();

app.use(express.json());

app.use('/api/v2/', blogRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Blog Server');
});

app.listen(PORT,async () => {
    console.log(`API is running on server http://localhost:${PORT}`);

    await connectToDatabase();
});

export default app;