import dotenv from "dotenv"    
import connect_DB from "./db/index.js"
import {app} from './app.js'

// const app = express();

dotenv.config({
  path: './.env'
})

connect_DB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
  })
})

.catch((err) => {
  console.log("MONGO db connection failed !!! ", err);
})