import * as Express from 'express';
const router = Express.Router();
import { base } from './config';
import UsersController from './controllers/users.controller';

router.post(`/${base.version}/users/signin`, UsersController.signin);
router.post(`/${base.version}/users/signup`, UsersController.signup);
router.get(`/${base.version}/users/current-user`, UsersController.currentUser);

export default router;
