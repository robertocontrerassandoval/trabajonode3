import express from 'express';
import { controllers } from '../controllers/posts.controllers.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hola mundo')
})

router.get('/posts',controllers.getProducts);

router.post('/posts', controllers.create )

router.get('*', (req, res) => {
    res.send('error 404')
})

export default router;
