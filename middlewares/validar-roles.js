const { request, response  } = require('express');

const esAdminRole = ( req = request, res = response, next ) => {

    if ( !req.persona ) {
        return res.status(500).json({
            msg: 'Se quiere verficar el role sin validar el token primero'
        });
    }

    //Verificación solo el rol de Admi puede realizar la eliminación
    //Si cumple con el rol de admin se envia al controllador deletePersona
    const { rol, nombre  } = req.persona
    if ( rol !== 'ROLE_MAESTRO') {
        return res.status(401).json({
            msg: `${ nombre } no es maestro - No puede hacer esto >:v`
        });
    }

    next();

}

const esAlumnoRole = (req = request, res = response) => {
    if (!req.user) {
        return res.status(500).json({
            msg: 'tu rol es de alumno acceso limitado.'
        })
    }
}

module.exports = {
    esAdminRole,
    esAlumnoRole
}
