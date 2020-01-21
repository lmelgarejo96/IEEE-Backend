"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* Service */
const service_auth_1 = require("../services/service.auth");
/* Middleware */
const validateToken_1 = require("../lib/validateToken");
router.post('/signup', service_auth_1.signup);
router.post('/signin', service_auth_1.signin);
router.get('/profile', validateToken_1.TokenValidation, service_auth_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map