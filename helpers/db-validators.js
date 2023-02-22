const Persona = require('../models/persona');
//const Categoria = require('../models/categoria');
const Role = require('../models/role');
const Curso = require('../models/curso');

//Validamos en contro de la db si ese curso ya existe
const cursoExiste = async( nombreCurso = '' ) => {
    //Verficar si el curso existe
    const existeCurso = await Curso.findOne( { nombreCurso } );
    if ( existeCurso ) {
        throw new Error(`El curso ${ nombreCurso }, ya esta registrado en la DB `);
    }
}

//Validamos en contro de la db si ese correo ya existe
const emailExiste = async( correo = '' ) => {
    //Verficar si el correo existe
    const existeEmailDePersona = await Persona.findOne( { correo } );
    if ( existeEmailDePersona) {
        throw new Error(`El correo ${ correo }, ya esta registrado en la DB `);
    }
}

const esRoleValido = async( rol = '') => {
    //Verificar si el rol es valido y existe en la DB
    const existeRolDB = await Role.findOne( { rol } );
    if ( !existeRolDB ) {
        throw new Error(`El rol ${ rol }, no existe en la DB `);
    }
}


const existePersonaPorId = async( id ) => {

    //Verificar si existe el ID
    const existIdOfUser = await Persona.findById( id );
    if ( !existIdOfUser ) {
        throw new Error(`El id: ${id} no existe en la DB`);
    }

}

/*const existeCategoriaPorId = async( id ) => {

    //Verificar si existe el ID
    const existIdOfCategory = await Categoria.findById( id );
    if ( !existIdOfCategory ) {
        throw new Error(`El id: ${id} no existe en la DB`);
    }

}*/


const existeCursoPorId = async( id ) => {

    //Verificar si existe el ID
    const existIdOfCurso = await Curso.findById( id );
    if ( !existIdOfCurso ) {
        throw new Error(`El id: ${id} no existe en la DB`);
    }

}


module.exports = {
    cursoExiste,
    emailExiste,
    esRoleValido,
    existePersonaPorId,
    existeCursoPorId
}