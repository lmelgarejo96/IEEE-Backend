import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IPayload {
    IdUsuario: string,
    iat: number,
    exp: number
}

export const TokenValidation = async (req: Request, res: Response, next: NextFunction) => {
    // El formato del token tiene que ser asi
    // authorization: Bearer <token>
    try {
        const TOKEN = req.cookies.access_token;
/*         console.log(AUTH_TOKEN);
        if(!AUTH_TOKEN) return res.status(401).json('Access denied');
        const TOKEN = AUTH_TOKEN.split(' ')[1]; */
        if(!TOKEN) return res.status(401).json('Access denied, invalid way to send the token');
        const PAYLOAD = await jwt.verify(TOKEN, process.env.SECRET_TOKEN || 'whatevertoken') as IPayload;
        if(!PAYLOAD) return res.status(401).json('Access denied');
        req.UserId = PAYLOAD.IdUsuario;
        next(); 
    } catch (error) {
        return res.status(401).json('Access denied');  
    }
}