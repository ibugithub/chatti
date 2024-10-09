import { Router } from 'express'
import { checkUser, saveUserInfo } from '../controllers/AuthController.js';

const router = Router(); 

router.post('/checkUser', checkUser);
router.post('/saveUserInfo', saveUserInfo);

export default router;
