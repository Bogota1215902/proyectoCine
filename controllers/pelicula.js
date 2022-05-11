import Persona from '../models/pelicula.js';

const personaGet= async (req, res)=>{
    const personas = await Persona.find()
    res.json({
        personas
    })
}

export {personaGet}