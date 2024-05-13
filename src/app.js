import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//Initialising the app with express.
const app = express();

/*Cors(Cross origin resource sharing) is used for sending data from a domain. Not all the domains are allowed to send data to the server.
In order to allow access of sending data to from any domain, Cors allows to configure, whitelist domains. This is done in order to ensure privacy, protection of the server data.
*/

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // This line is used to send json file to server with a limit of not more than 16kb.

app.use(express.urlencoded({extended: true, limit: "16kb"})) // This line is used to parse url, often 


app.use(express.static("public")) // This line is used to send static files from the public folder to the server. Static files may include images, videos.

app.use(cookieParser()) // This line is used to send data from the cookies to the server.

// routes  import
import userRouter from './routes/user.routes.js';


//routes declaration
app.use("/api/v1/users", userRouter)

export default app;