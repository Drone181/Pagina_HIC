import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import webHookRouter from "./routes/webhook.route.js"
import { clerkMiddleware, requireAuth } from '@clerk/express'
import cors from "cors"

const app = express()

// Configuración de CORS unificada
app.use(cors({
  origin: "*", // Permite todas las origenes para pruebas
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}))

app.use(express.json())
app.use(clerkMiddleware())
app.use("/webhooks", webHookRouter)

// Rutas
app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

// Ruta de prueba para verificar que el servidor funciona
app.get("/test", (req, res) => {
    res.status(200).send("Server is working!")
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        message: error.message || "Something went wrong",
        status: error.status,
        stack: error.stack,
    })
})

app.listen(3000, () => {
    connectDB()
    console.log("Server is running on port 3000!")
})