import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
/* Models */
import { Login } from '../models/Login';
import { Usuario } from '../models/Usuario';
/* Controllers */
import { LoginController } from '../controllers/login.controller';
import { UsuarioController } from '../controllers/usuario.controller';

// Instance
const LOGINCONTROLLER = new LoginController();
const USERCONTROLLER = new UsuarioController();

const EXPIRATION = 60 * 60 * 5; //5 horas

// Register
export const signup = async (req: Request, res: Response) => {
    const CORREO = await USERCONTROLLER.buscarPorCorreo(req.body.Correo);
    if (CORREO) {
        return res.json('El correo ya está siendo utilizado');
    }else{
        const USER = new Usuario();
        const pass = await USERCONTROLLER.encriptarContraseña(req.body.Contraseña);
        if(pass){
            USER.setCorreo(req.body.Correo)
            USER.setContraseña(pass)
            USER.setPregunta(req.body.Pregunta)
            USER.setRespuesta(req.body.Respuesta)

            const respuesta = await USERCONTROLLER.agregarUsuario(USER);

            if(!respuesta)  return res.json('Ocurrio un error y no se pudo guardar');
            return res.json('Cuenta creada satisfactoriamente, espere la aceptación del administrador');
        }

        return res.json('Ocurrio un error y no se pudo guardar');
    }
    
}

// Login
export const signin = async (req: Request, res: Response) => { 
    try {
        console.log(req.body);
        const LOGIN: Login = await LOGINCONTROLLER.buscarPorCorreo(req.body.Correo);
        if(!LOGIN) return res.status(403).json('Email or password is wrong'); 
    
        const CORRECTPASS: boolean = await LOGIN.validarContraseña(req.body.Contraseña);
        if(!CORRECTPASS) return res.status(403).json('Invalid password'); 
    
        if( LOGIN.getEstadoConfirmacion() === false || 
            LOGIN.getEstadoTabla() === true ) return res.status(401).json('Access denied');
        
        const TOKEN: string = await jwt.sign({IdUsuario: LOGIN.getIdUsuario()}, process.env.SECRET_TOKEN || 'whatevertoken', {
            expiresIn: EXPIRATION// 5 hours
        });
        console.log(TOKEN)
        
        res.cookie('access_token', TOKEN, {
            maxAge: EXPIRATION,
            expires: new Date(Date.now() + EXPIRATION),
            httpOnly: true,
            secure: true // cambiar a true cuando se use https
        });
        res.status(200).json(LOGIN);
    } catch (error) {
        console.log(error)
    }

}

// Profile info
export const profile = async (req: Request, res: Response) => {
    
    const USER = await USERCONTROLLER.usuarioPorId(parseInt(req.UserId));
    if(!USER) return res.status(404).json('No user found');
    res.json(USER);

}