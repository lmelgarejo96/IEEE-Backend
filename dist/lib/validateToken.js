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
exports.TokenValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // El formato del token tiene que ser asi
    // authorization: Bearer <token>
    try {
        const TOKEN = req.cookies.access_token;
        /*         console.log(AUTH_TOKEN);
                if(!AUTH_TOKEN) return res.status(401).json('Access denied');
                const TOKEN = AUTH_TOKEN.split(' ')[1]; */
<<<<<<< HEAD
        console.log('date', new Date());
=======
>>>>>>> 2a8f0674e9805a00054c7e111cb812bbf7485949
        if (!TOKEN)
            return res.status(401).json('Access denied, invalid way to send the token');
        const PAYLOAD = yield jsonwebtoken_1.default.verify(TOKEN, process.env.SECRET_TOKEN || 'whatevertoken');
        if (!PAYLOAD)
            return res.status(401).json('Access denied');
        req.UserId = PAYLOAD.IdUsuario;
        next();
    }
    catch (error) {
        return res.status(401).json('Access denied');
    }
});
//# sourceMappingURL=validateToken.js.map