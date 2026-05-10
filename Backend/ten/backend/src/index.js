import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import Users from "./models/UsersSchema.js";
import authroute from "./routes/AuthRoutes.js";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import blogroute from "./routes/BlogRoute.js";

const app = express();

dotenv.config();

connectDb();

console.log(process.env.MONGOURI);

app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))
app.use(express.json());
app.use(cookieParser())
console.log(cookieParser());



app.get("/", (req, res) => {
  res.json({
    message: "seccesfully run",
  });
});


// /api/v1/auth/
app.use('/api/v1/auth',authroute)
app.use('/api/v1/blog/',blogroute)


app.listen(process.env.PORT, () => {
  console.log("server is runnning", process.env.PORT);
});


// ______________________________________________________OLD CODE
// app.post("/api/v1/auth/user", async (req, res) => {
  
// });
// app.GET("/api/v1/auth/USERS", async (req, res) => {
  
// });
// app.GET("/api/v1/auth/USER", async (req, res) => {
  
// });

// app.PUT("/api/v1/auth/USER", async (req, res) => {
  
// });
// app.DELET("/api/v1/auth/USER", async (req, res) => {
  
// });


// __________________________________nEW APPROACH
// app.use('/api/v1/auth',authroute)
// app.use('/api/v1/PRODUCT',PRODUCT)
// app.use('/api/v1/PAYMENT',PAYMENTROUTES)


// localhost:5000/api/v1/auth/user
// localhost:5000/api/v1/auth/USERS
// localhost:5000/api/v1/auth/user
// localhost:5000/api/v1/auth/user
// localhost:5000/api/v1/PRODUCT/GETUSERS
// localhost:5000/api/v1/auth/user



