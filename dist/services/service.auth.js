"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Usuario_1 = require("../models/Usuario");
/* Controllers */
const login_controller_1 = require("../controllers/login.controller");
const usuario_controller_1 = require("../controllers/usuario.controller");
// Instance
const LOGINCONTROLLER = new login_controller_1.LoginController();
const USERCONTROLLER = new usuario_controller_1.UsuarioController();
const EXPIRATION = 60 * 60 * 5; //5 horas
// Register
exports.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CORREO = yield USERCONTROLLER.buscarPorCorreo(req.body.Correo);
    if (CORREO) {
        return res.json('El correo ya está siendo utilizado');
    }
    else {
        const USER = new Usuario_1.Usuario();
        const pass = yield USERCONTROLLER.encriptarContraseña(req.body.Contraseña);
        if (pass) {
            USER.setCorreo(req.body.Correo);
            USER.setContraseña(pass);
            USER.setPregunta(req.body.Pregunta);
            USER.setRespuesta(req.body.Respuesta);
            const respuesta = yield USERCONTROLLER.agregarUsuario(USER);
            if (!respuesta)
                return res.json('Ocurrio un error y no se pudo guardar');
            return res.json('Cuenta creada satisfactoriamente, espere la aceptación del administrador');
        }
        return res.json('Ocurrio un error y no se pudo guardar');
    }
});
// Login
exports.signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const LOGIN = yield LOGINCONTROLLER.buscarPorCorreo(req.body.Correo);
        if (!LOGIN)
            return res.status(403).json('Email or password is wrong');
        const CORRECTPASS = yield LOGIN.validarContraseña(req.body.Contraseña);
        if (!CORRECTPASS)
            return res.status(403).json('Invalid password');
        if (LOGIN.getEstadoConfirmacion() === false ||
            LOGIN.getEstadoTabla() === true)
            return res.status(401).json('Access denied');
        const TOKEN = yield jsonwebtoken_1.default.sign({ IdUsuario: LOGIN.getIdUsuario() }, process.env.SECRET_TOKEN || 'whatevertoken', {
            expiresIn: EXPIRATION // 5 hours
        });
        console.log(TOKEN);
        res.cookie('access_token', TOKEN, {
            maxAge: EXPIRATION,
            expires: new Date(Date.now() + EXPIRATION),
            httpOnly: true,
            secure: true // cambiar a true cuando se use https
        });
        res.status(200).json(LOGIN);
    }
    catch (error) {
        console.log(error);
    }
});
// Profile info
exports.profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const USER = yield USERCONTROLLER.usuarioPorId(parseInt(req.UserId));
    if (!USER)
        return res.status(404).json('No user found');
    res.json(USER);
});
//# sourceMappingURL=service.auth.js.map