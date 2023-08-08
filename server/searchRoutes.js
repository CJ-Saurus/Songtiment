const express = require('express');
const router = express.Router();
const axios = require('axios');
const Comment = require("./models/comment");

router.post('/search', async (req, res) => {
    const { searchTerm } = req.body;
    const rapidApiKey = 'e7a59d2905mshd77e182171bc8a1p130dc7jsn70a843527cbe';

    try {
        const response = await axios.get('https://songmeanings.p.rapidapi.com/', {
            params: {
                key: rapidApiKey,
                sm_lid: searchTerm,
                method: 'lyrics.get',
            },
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': 'songmeanings.p.rapidapi.com',
            },
        });

        const lyrics = response.data;
        res.json({ lyrics });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lyrics not found.' });
    }
});

router.post('/comment', async (req, res) => {
    try {
        const comment = Comment.create(req.body)
        res.json(comment)
    } catch (error) {
        res.json(error)
    }
})
module.exports = router;

