import express from 'express';
import userCtrl from '../controllers/user.controller';
import authCrl from '../controllers/auth.controller';

const router = express.Router(); //Used to create endpoints.

router.route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create);

router.route('/api/users/:userId')
    .get(authCtrl.requireSignIn, userCtrl.read)
    .put(authCtrl.requireSignIn, authCtrl.hasAuthorization, userCtrl.update)
    .delete(authCtrl.requireSignIn, authCtrl.hasAuthorization, userCtrl.remove);

/**
 * This implies that when a route/endpoint that contains the :userId parameter within
 * its path, the UserController will invoke the userByID function first, prior to executing
 * the specified controller function in the route definition.
 */
router.param('userId', userCtrl.userByID); 




export default router;

/**
 * MAKE NOTES ON PAPER ABOUT THE METHODS FROM MONGOOSE + METHODS FROM EXPRESS.
 */