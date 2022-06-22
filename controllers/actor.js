import Actor from '../models/actor.js';

const actorGet= async (req, res)=>{
 const actores = await Actor.find()
  res.json({
        actores
    })
}

const actorGetId= async (req, res)=>{
    const {id}=req.params
    const actor = await Actor.findById(id) 

    res.json({
        actor
    })
}

const actorGetNombre= async (req, res)=>{
    const {nombre}=req.query
    const actor = await Actor.find({nombre}) 

    res.json({
        actor
    })
}

const actorPost = async (req, res)=>{
    const {nombre,alias,foto,biografia}=req.body
    const actores = new Actor({nombre,alias,foto,biografia})
    actores.save() 
    res.json({
        actores
    })
}
const actorPut = async (req, res)=>{
    const {id} = req.params;    
    const {nombre,alias,foto,biografia}=req.body;
    const actor= await Actor.findByIdAndUpdate(id,{nombre,alias,foto,biografia});
    res.json({
        actor
    })
}
 const actorDelete = async (req, res)=>{
     const {id}= req.params;
    const actor= await Actor.findByIdAndDelete(id);
    res.json({
        actor
    })
 }
export {actorGet, actorPost,actorGetId,actorGetNombre,actorPut,actorDelete}


