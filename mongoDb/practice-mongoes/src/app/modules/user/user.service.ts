
import { IUser } from "./user.interface"
import User from "./user.model"

export const createUserToDB = async(payload: IUser): Promise <IUser> =>{
    const user = await new User(payload)
    await user.save()
    return user
}

// Get All users
export const getUsersFromDB = async(): Promise <IUser []> =>{
    const users = await User.find()
    return users
}

// Get single user 
export const getUserByIdFromDB =async (payload:string): Promise <IUser | null> => {
    const user = await User.findOne({id: payload})
    return user
}