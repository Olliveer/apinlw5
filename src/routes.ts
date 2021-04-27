import { Router } from 'express';
import MessageController from './controllers/MessageController';
import SettingController from './controllers/SettingsController';
import UsersController from './controllers/UsersController';

const routes = Router();
const settingController = new SettingController();
const usersController = new UsersController();
const messagesController = new MessageController();

routes.post('/settings', settingController.create);
routes.post('/settings/:username', settingController.findByUserName);
routes.put('/settings/:username', settingController.update);

routes.post('/users', usersController.create);

routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

export default routes;
