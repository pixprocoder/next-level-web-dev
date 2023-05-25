import app from './app'
import mongoose from 'mongoose'

const port = 5000

// connect to db 
async function connectToDB() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoes');
    console.log('DB connected');
    app.listen(port, () => {
      console.log(`server is running on port ${port}`)
    })    
  } catch(error){
    console.log(error, 'Error');
  }
  
}
connectToDB()




