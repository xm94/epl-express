import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes";
import todosRoutes from "./routes/todosRoutes";
import productRoutes from "./routes/productRoutes";
import studentRoutes from "./routes/studentRoutes";

import cors from "cors";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
app.use('/posts', postRoutes);
app.use('/todos',todosRoutes);
app.use('/products',productRoutes);
app.use('/students',studentRoutes)


app.get("/", (req: Request, res: Response) => {
    res.send("Text");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port} ${process.env.DB_HOST} `);
});