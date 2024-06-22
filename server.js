 const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const corsOptions = {
  origin: 'http://localhost:8080', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors());
app.use(express.json());
const allowedOrigins = ['http://localhost:3000','http://localhost:3002','http://localhost:3001',
 ' http://localhost:3003'
];
const originValidator = (origin, callback) => {
  if (allowedOrigins.includes(origin) || !origin) {
    callback(null, true);
  } else {
    callback(new Error('Not allowed by CORS'));
  }
};


app.use(cors({ origin: originValidator }));




app.post('/api/login', (req, res) => {
  console.log('Login endpoint reached');
  const { username, password } = req.body;
  
  
  if (username === 'user' && password === 'password') {
    console.log(`username,password`);
 
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    res.json({ success: true, token });
  } else {
   
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
