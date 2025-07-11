import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/ratelimit.js";
import cors from 'cors';

dotenv.config();

const app=express();

//middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
app.use(rateLimiter);

//custom middleware(used for authentication)
// app.use((req, res, next)=>{
//     console.log(`req method=${req.method} & req URL=${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(5001, ()=>{
        console.log("server is running on port 5001");
    });
});
