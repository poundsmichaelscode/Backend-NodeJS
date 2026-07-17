import express from "express"


export const app = express();

const port = 8000




app.get("/", (req,res )=>{
    
return res.send("welcome to poundsmichaels store")

});


app.get("/profile", (req, res)=> {
return res.send("this is your profile")

})

app.get("/homepage", (req, res)=> {


    return res.send("Home page redirextion")

    
})


app.get("/pictures", (req, res)=> {

    return res.send("pictures Gallary")

    
})

app.listen(port,() =>{

    console.log("server is running on port 8000")
})



