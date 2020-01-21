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
// SQL con mssql
const db_config_1 = __importDefault(require("./db.config"));
exports.sql = require('mssql');
exports.connection = function Conn() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield exports.sql.connect(db_config_1.default);
            if (conn) {
                console.log('DB is connected');
                return conn;
            }
            else {
                console.log('There was an error trying to connect to the database..');
                return;
            }
        }
        catch (err) {
            console.log('Hubo un error conectando a la Base de datos');
        }
    });
};
// MONGO DB
/* import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then( db => console.log('Database is connected!'))
    .catch( error => console.log('There was an error trying to connect to the database..')) */
//# sourceMappingURL=database.js.map