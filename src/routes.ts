import { Router } from 'express';
import SettingController from './controllers/SettingsController';
import UsersController from './controllers/UsersController';

const routes = Router();
const settingController = new SettingController();
const usersController = new UsersController();

routes.post('/settings', settingController.create);
routes.post('/users', usersController.create);

export default routes;
