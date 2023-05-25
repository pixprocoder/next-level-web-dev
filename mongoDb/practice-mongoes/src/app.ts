import express, { urlencoded, Application} from 'express'
import cors from 'cors'

// Application routes
import userRoutes from './app/modules/user/user.router'

// creating app 
const app: Application = express()


// cors and middleware
app.use(express.json())
app.use(cors())
app.use(urlencoded({extended:true}))

// apis 
app.use('/api/v1/user', userRoutes)


/*
 interface => interface.ts
 schema , model => model.ts
 route
 route function => controller.ts
 database query => service.ts

 */

export default app