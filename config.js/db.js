const mongoose = require('mongoose')

// mongoose.connect("mongodb://127.0.0.1:27017/ips_college_DB")
mongoose.connect("mongodb+srv://ipsinstitute8081:0cVqrne4LAZ5wvp8@ips-clg.hxvt3.mongodb.net/?retryWrites=true&w=majority&appName=IPS-CLG")
.then(function(){
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err)
})