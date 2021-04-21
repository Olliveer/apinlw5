import { Router } from 'express';
import SettingController from './controllers/SettingsController';

const routes = Router();
const settingController = new SettingController();

routes.post('/settings', settingController.create);

export default routes;
