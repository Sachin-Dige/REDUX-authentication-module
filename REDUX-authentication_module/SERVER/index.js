const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors =  require("cors");  
app.use(cors());
app.use(express.json());
// DB CONNECTION................................................
mongoose.connect(
    'mongodb://localhost:27017/Redux',()=>console.log("[REDUX] DATABASE connected succesfully....")
    );
    

const register_pageRoutes = require("./routes/Routes");
//ROUTE MIDDLEWARE...............................................
app.use("/users", register_pageRoutes);


app.listen(4000, ()=>console.log("REDUX-Server is running on Port-4000"));