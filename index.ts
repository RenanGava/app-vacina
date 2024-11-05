import express from 'express'
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())


app.get('/user', (req, res) =>{

    const user = req.body

    if(user.name === 'Paula'){
        res.json({
            id: 1,
            name: 'paula',
            idade: 25
        })
    }
    else{
        res.json({
            error: 'User not found!'
        })
    }
})




app.listen(3000, () =>{
    console.log('Hello world');
})