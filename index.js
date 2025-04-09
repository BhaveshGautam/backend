const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authrouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const courseRouter = require('./routes/course.route');
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));


app.use('/api/auth', authrouter);
app.use('/api/users', userRouter);
app.use('/api/courses', courseRouter);


app.get('/', (req, res) => {
    res.send('🎓 Student Management System API Running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
