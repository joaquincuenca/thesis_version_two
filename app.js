const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://joaquin:Q6FIRHk3mR75VbsY@cluster0.dxizzqg.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0')
<<<<<<< HEAD
.then(() => {
    console.log("database connected");
})
.catch(() => {
=======
.then(() =>{
    console.log("database connected");
})
.catch(() =>{
>>>>>>> origin/master
    console.log("database failed");
})

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
<<<<<<< HEAD
=======
  
>>>>>>> origin/master
}));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');

<<<<<<< HEAD
// User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
=======


// User Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
>>>>>>> origin/master
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Routes
app.get('/', (req, res) => {
<<<<<<< HEAD
    res.render('index', { isLogin: req.session.loggedIn });
});

app.get('/about', (req, res) => {
    res.render('about', { isLogin: req.session.loggedIn });
});

app.get('/services', (req, res) => {
    res.render('services', { isLogin: req.session.loggedIn });
});

app.get('/login', (req, res) => {
    res.render('login', { error: null, isLogin: req.session.loggedIn });
});

app.get('/signup', (req, res) => {
    res.render('signup', { isLogin: req.session.loggedIn });
=======
    
    res.render('index',{isLogin:req.session.loggedIn});
});

app.get('/about', (req, res) => {
    res.render('about',{isLogin:req.session.loggedIn});
});

app.get('/services', (req, res) => {
    res.render('services',{isLogin:req.session.loggedIn});
});

app.get('/login', (req, res) => {
    res.render('login', { error: null,isLogin:req.session.loggedIn });
});

app.get('/signup', (req, res) => {
    res.render('signup',{isLogin:req.session.loggedIn});
>>>>>>> origin/master
});

app.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
<<<<<<< HEAD
        res.render('dashboard', { isLogin: req.session.loggedIn });
=======
        res.render('dashboard',{isLogin:req.session.loggedIn});
>>>>>>> origin/master
    } else {
        res.redirect('/login');
    }
});

app.post('/signup', async (req, res) => {
<<<<<<< HEAD
    const { name, lastname, username, email, password } = req.body;
=======
      const { name, username, email, password } = req.body;
>>>>>>> origin/master
    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
<<<<<<< HEAD
            return res.render('signup', { taken: "Email is already taken." });
        }

        // If email does not exist, create a new user
        const newUser = new User({ name, lastname, username, email, password });
        await newUser.save();
        res.render('login');
    } catch (error) {
        console.error(error);
        res.render('signup', { taken: "An error occurred. Please try again." });
=======
            return res.render('signup.ejs', { taken: "Email is already taken." });
        }

        // If email does not exist, create a new user
        const newUser = new User({ name, username, email, password });
        await newUser.save();
        res.render('login.ejs');
    } catch (error) {
        console.error(error);
        res.render('signup.ejs', { taken: "An error occurred. Please try again." });
>>>>>>> origin/master
    }
});

app.post('/login', async (req, res) => {
<<<<<<< HEAD
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
=======
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
>>>>>>> origin/master
        if (user) {
            req.session.loggedIn = true;
            res.redirect('/dashboard');
        } else {
<<<<<<< HEAD
            res.render('login', { error: 'Incorrect email or password', isLogin: req.session.loggedIn });
        }
    } catch (error) {
        res.render('login', { error: 'An error occurred. Please try again.', isLogin: req.session.loggedIn });
=======
            res.render('login', { error: 'Incorrect username or password',isLogin:req.session.loggedIn });
        }
    } catch (error) {
        res.render('login', { error: 'An error occurred. Please try again.',isLogin:req.session.loggedIn });
>>>>>>> origin/master
    }
});

// Sign out route
app.get('/signout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/dashboard');
        }
        res.redirect('/');
    });
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/master
