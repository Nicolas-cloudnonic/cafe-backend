import * as dotenv from 'dotenv'

dotenv.config()
export const config = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 8080,
    URL: process.env.BASE_URL || 'http://localhost:8080',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://cafe-admin:56EBRNiwude4nU7G@cafe-api.nlchrwg.mongodb.net/?retryWrites=true&w=majority'
}