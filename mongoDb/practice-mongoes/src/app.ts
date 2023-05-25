import express, {Request, Response, NextFunction, urlencoded, Application} from 'express'
import cors from 'cors'
import { Schema, model } from 'mongoose'

const app: Application = express()
// cors and middleware
app.use(express.json())
app.use(cors())
app.use(urlencoded({extended:true}))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // Inserting a data to mongoDB
  /**
   * 1. Interface
   * 2. Schema
   * 3. Model
   * 4. Database Query
  */

  // creating Interface
  interface IUser {
    id: number;
    role: 'student';
    name: {
      firstName: string;
      middleName?: string;
      lastName: string
    };
    email: string;
    gender: "Male" | "Female";
    address: string;
    phone?: string
  }

  // Creating Schema
  const userSchema = new Schema<IUser>({
    id: {
      type: Number,
      required: true,
      unique: true
    },
    role:{
      type: String,
      required: true
    },
    name:{
      firstName:{
        type: String,
        required: true
      },
      middleName:{
        type: String
      },
      lastName:{
        type: String,
        required: true
      }
    },
    email:{
      type: String,
      required: true
    },
    gender:{
      type: String,
      enum: ["Male", "Female"]
    },
    address:{
      type: String,
      required: true
    },
    phone:{
      type: String
    }
  })

  // Creating Model
  const User = model<IUser>('User', userSchema)

  const createUserToDB = async() =>{
    const user = new User({
      id: 55,
      role: 'student',
      name: {
        firstName: 'md',
        middleName: 'samsul',
        lastName: 'kobir'
      },
      email: 'makkobir@gmail.com',
      gender:  "Female",
      address: 'dhaka',
      phone: '3466223'
    })

    await user.save()
  }
  createUserToDB()

  

  res.send('Hello World!')
  next()
})


export default app