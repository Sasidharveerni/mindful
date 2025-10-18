const functions = require('firebase-functions');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
const registerRoutes = require('./routes/registration');

const app = express();

// ✅ CORS configuration for Firebase
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(registerRoutes);

// ✅ Health check route
app.get('/', (req, res) => {
  try {
    res.send('Firebase Server is running');
  } catch (error) {
    console.log('Error in server', error);
    res.status(500).send('Server error');
  }
});

// ✅ Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// ✅ MongoDB connection (Firebase style)
const connectDB = async () => {
  try {
    // Use environment variable (set in Firebase config)
    const mongoUri =  process.env.MONGO_URL || 'mongodb+srv://sasidharveerni2_db_user:Dk0d6Js96sv4IXIJ@cluster0.lydazis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ;
    
    if (!mongoUri) {
      throw new Error('MongoDB URI is not defined');
    }

    await mongoose.connect(mongoUri);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

// Connect to database when function starts
connectDB();

// ✅ Export as Firebase Function
exports.api = functions.https.onRequest(app);