import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

/* models */
import { Login } from '../models/Login';
import { Usuario } from '../models/Usuario';
/* Controller */
import { LoginController } from '../controllers/login.controller'
import { UsuarioController } from '../controllers/usuario.controller'



const LOGINCONTROLLER = new LoginController();
const USERCONTROLLER = new UsuarioController();


// Register
export const signup = async (req: Request, res: Response) => {
    const USER = new Usuario();
    const pass = await USER.encriptarContraseña(req.body.Contraseña);
    if(pass){
        USER.setCorreo(req.body.Correo)
        USER.setContraseña(pass)
        USER.setPregunta(req.body.Pregunta)
        USER.setRespuesta(req.body.Respuesta)

        const respuesta = await USERCONTROLLER.agregarUsuario(USER);
        if(!respuesta)  return res.json('Ocurrio un error y no se pudo guardar');

        res.json('Cuenta creada satisfactoriamente, espere la aceptación del administrador');
    }
}

// Login
export const signin = async (req: Request, res: Response) => {
    const LoginControl = new LoginController();
    
    const LOGIN: Login = await LoginControl.buscarPorCorreo(req.body.Correo);
    if(!LOGIN) return res.status(403).json('Email or password is wrong');

    const CORRECTPASS = await LOGIN.validarContraseña(req.body.Contraseña);
    if(!CORRECTPASS) return res.status(403).json('Invalid password');

    if(LOGIN.getEstado() == false) return res.status(401).json('Access denied');
    

    const TOKEN: string = await jwt.sign({IdUsuario: LOGIN.getIdUsuario()}, process.env.SECRET_TOKEN || 'whatevertoken', {
        expiresIn: 60*60*5 // 5 horas
    });
    
    res.cookie('access_token', TOKEN, {
        maxAge: 60*60*5,
        httpOnly: true,
        secure: true
    });

    res.status(200).json(LOGIN);
}

// Profile info
export const profile = async (req: Request, res: Response) => {
    const USER = await USERCONTROLLER.usuarioPorId(parseInt(req.UserId));

    if(!USER) return res.status(404).json('No user found');
    res.json(USER);

    

    /* const user = new Usuario();
    const pass = await user.encriptarContraseña('1234');
    if(pass){
        user.setCorreo('aaaa@gmail.com')
        user.setContraseña(pass)
        user.setPregunta('hola')
        user.setRespuesta('hola')
        console.log(user)
        const respuesta = await usercontroller.agregarUsuario(user);
        console.log(respuesta)
    } */

    

    
    

}