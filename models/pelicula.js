import mongoose from 'mongoose'

const PersonaSchema = new mongoose.Schema({
    nombre:{type: 'string',maxLength:25,required:true},
    apellido:{type: 'string',maxLength:25,required:true},
    email:{type: 'string',unique:true,required:true},
    password:{type: 'string',required:true,minLength:6},
    createAt:{type:Date,default:Date.new}
})

const PeliculaSchema = new mongoose.Schema({
    titulo:{type: 'string',maxLength:50,required:true},
    genero:{type: 'string',maxLength:25,required:true},
    idioma:{type: 'string',required:0,default:0},
    director:{type: 'string',required:0},
    reparto:[
        {nombre:{type: 'string',maxLength:25,required:true}},
        {papel:{type: 'string',maxLength:25,required:true}}
    ],
    createAt:{type:Date,default:Date.new}
})



export default mongoose.model('Persona',PersonaSchema, 'Pelicula', PeliculaSchema)