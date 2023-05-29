const express =  require("express");
const https  = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extented : true}));

app.use(express.static("public"))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(request, response) {

    let email = request.body.email;
    let firstName = request.body.fName;
    let secondName = request.body.lName;

    console.log(firstName , secondName , email)
})


app.listen(3000, function() {
    console.log("Server are running on port 3000")
})