import { models } from '../models/posts.model.js';


// esto es post

const create = async (req, res)=> {
    try {
        const {titulo, img , descripcion, likes} =req.body;
        const response = await models.create(titulo, img , descripcion, likes)
        res.status(200).send("producto creado")
    } catch (error) {
        res.status(500).send(error.message);
    }
}



// esto es GET

const getProducts = async (req, res) => {
    try {
        const response = await models.getProducts()
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
} 

export const controllers = {
    create,
    getProducts
}