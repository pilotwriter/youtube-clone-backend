const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./models');
const {User} = require('./models');
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello')
})
app.post("/signin",(req,res)=>{
    const payload = {
        name:req.body.name,
        email:req.body.email,
        googleId:req.body.googleId
    }
    console.log(req.body)
    User.create(payload).then((res=>{
        res.send('inserted new user to the database')
    })).catch(err=>{
        res.json({
            error:err
        })
    }) 
});
db.sequelize.sync().then((req)=>{
    app.listen(PORT,()=>{
        console.log(`Server ${PORT} is listened!`)
    })
});