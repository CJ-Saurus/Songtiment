const express = require('express');
// const cors = require('cors');

const searchRoutes = require('./searchRoutes');
const db = require("./config/connection");
const Comment = require('./models/comment')

const PORT = 5000;
const app = express();

app.use(express.json());
// app.use(cors());



// app.use('/api', searchRoutes);

app.post('/comment', async (req, res) => {
    try {
        const comment = Comment.create(req.body)
        res.json(comment)
    } catch (error) {
        res.json(error)
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});