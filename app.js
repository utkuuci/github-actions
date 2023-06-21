const express = require('express');
const cors = require('cors')


const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const router = express.Router();

router.get('/tolga', (req, res) => {
    return res.status(200).json({
        name: "Tolga",
        lastname: "Yakar",
        message: "Hello world",
        error: null
    });
})

router.get('/ahmet', (req, res) => {
    return res.status(200).json({
        name: "Ahmet",
        lastname: "Guner",
        message: "Hello world",
        error: new Error('This is the error message').message
    });
})


app.use('/api/v1', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})