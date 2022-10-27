import { userRouter } from "./routes/UserRouter"
import { postRouter } from "./routes/PostRouter"
import {app} from './app'
import { friendRouter } from "./routes/FriendRouter"

app.use("/user",userRouter)
app.use("/post", postRouter)
app.use("/",friendRouter )






