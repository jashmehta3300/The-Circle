const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const morgan = require('morgan');

//route files
const auth = require('./routes/auth');
const castVote = require('./routes/castVote');

//Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

//Body parser
app.use(express.json());

// Dev logging middleware
app.use(morgan('dev'));

//Mount routes
app.use('/api/auth', auth);
app.use('/api/vote', castVote);

//Access env variable
const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `\n Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
        .cyan.bold
    )
);

process.on('unhandledRejection', (err, promise) => {
    console.log(`\nError: ${err.message}\n`.red);
    // Close server & exit process
    // server.close(() => process.exit(1));
});