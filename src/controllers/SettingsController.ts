import { Request, Response } from 'express';
import SettingsService from '../services/SettingsService';

class SettingController {
  // eslint-disable-next-line class-methods-use-this
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingService = new SettingsService();

    try {
      const settings = await settingService.create({ chat, username });

      return res.status(201).json(settings);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default SettingController;
