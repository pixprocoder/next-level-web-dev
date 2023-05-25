import { Schema, model } from "mongoose"
import { IUser } from "./user.interface"

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

  export default User;