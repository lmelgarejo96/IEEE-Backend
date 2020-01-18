import { Router } from 'express';
const router: Router = Router();

/* Service */
import { signup, signin, profile } from '../services/service.auth';

/* Middleware */
import { TokenValidation } from '../lib/validateToken';

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidation,  profile);


export default router;