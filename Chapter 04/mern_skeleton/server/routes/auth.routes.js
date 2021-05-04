import express from 'express';
import authCtrl from './../controllers/auth.controller';

const router = express.Router();

/**
 * POST request to signin route & GET request to signout route will invoke the corresponding controller functions
 */
router.route('/auth/signin')
    .post(authCtrl.signin);

router.route('/auth/signout')
    .get(authCtrl.signout);



export default router;
