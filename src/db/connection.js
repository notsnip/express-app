const mongoose= require("mongoose")

// MongoDB connection string
db_url= 'mongodb+srv://snipc:<password>@cluster69.example.mongodb.net/DataBaseName'



mongoose.connect(db_url).then(()=>{
    console.log("Connection to MongoDB successful.")
}).catch(()=>{
    console.error("Connection to MongoDB failed!")
})