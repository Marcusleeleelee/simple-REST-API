import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js';



dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);
app.get('/', (req, res) => {
    res.send('The REST API is actually working and I am so happy!!!');
}); 


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
}).catch(() => {
    console.log('Error connecting to MongoDB');
})