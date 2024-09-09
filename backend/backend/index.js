const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 8800;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// MongoDB connection (local)
mongoose.connect('mongodb://localhost:27017/RoomBooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }
});

const User = mongoose.model('User', UserSchema);

// Register route
app.post('/register', async (req, res) => {
    const { email, password, role } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ email, password, role });

        // No password encryption
        await user.save();

        res.status(200).json({ msg: 'User registered successfully' });
        console.log(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        // Find the user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist' });
        }

        // Simple password comparison (not recommended for production)
        if (user.password !== password) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Respond with success message and user data
        res.status(200).json({ msg: 'Login successful', user });
        console.log("Login successful for user:", user.email);
    } catch (err) {
        console.error('Server error:', err.message);
        res.status(500).send('Server error');
    }
});


app.listen(PORT, () => console.log(Server running on port ${ PORT }));