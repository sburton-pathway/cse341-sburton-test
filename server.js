import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server listening at 127.0.0.1:${PORT}`);
});
