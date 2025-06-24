const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())
const cors=require('cors')
app.use(cors())
const dotenv=require('dotenv')
dotenv.config()


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err)
})

const todoSchema=new mongoose.Schema({
    task:String,
    completed:{
        type:Boolean,
        default:false
    }
})
const todo=new mongoose.model('todo',todoSchema)

app.post('/add',(req,res)=>{
    const task=req.body.task
    todo.create({task:task})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/get',(req,res)=>{
    todo.find().then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})


app.put('/update/:id',(req,res)=>{
    const id=req.params.id
    todo.updateOne({_id:id},{completed:true})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
   
})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id
    todo.deleteOne({_id:id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(8000,()=>{
    console.log('server started')})