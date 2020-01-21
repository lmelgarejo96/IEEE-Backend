"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = __importDefault(require("./routes/auth"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
<<<<<<< HEAD
=======
const cors_1 = __importDefault(require("cors"));
>>>>>>> 2a8f0674e9805a00054c7e111cb812bbf7485949
const app = express_1.default();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
app.use(helmet_1.default());
<<<<<<< HEAD
// Routes
app.use('/api/auth', auth_1.default);
=======
app.use(cors_1.default({
    origin: [
        'http://localhost:3000',
        'http://localhost:8080',
    ],
    credentials: true
}));
// Routes
app.use('/api/auth', auth_1.default);
app.use('/', (req, res) => {
    res.send('hello world');
});
>>>>>>> 2a8f0674e9805a00054c7e111cb812bbf7485949
// Static files
exports.default = app;
//# sourceMappingURL=app.js.map