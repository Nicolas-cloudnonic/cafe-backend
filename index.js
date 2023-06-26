import cors from 'cors'
import express from 'express'
import {config} from './config.js';
import connectDB from "./mongodb/connect.js";

// @import routes
import authRoutes from "./routes/auth.routes.js";
import storeRoutes from "./routes/store.routes.js";
import orderRoutes from "./routes/order.routes.js";
import productRoutes from "./routes/product.routes.js";
import customerRoutes from "./routes/customer.routes.js";

const app = express()
app.use(cors())
app.use(express.json({limit: '50mb'}))


app.get('/', (req, res) => {
    res.send({message: 'Hello World!'})
})

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/stores', storeRoutes)
app.use('/api/v1/orders', orderRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/customers', customerRoutes)

const startServer = async () => {
    try {
        // connect to the database...
        connectDB(config.MONGODB_URI)

        app.listen(config.PORT, () => console.log('Server started on port ', config.PORT))
    } catch (error) {
        console.log(error)
    }
}

startServer()
