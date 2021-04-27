/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import SettingsService from '../services/SettingsService';

class SettingController {
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

  async findByUserName(req: Request, res: Response) {
    const { username } = req.params;
    const settingService = new SettingsService();

    const settings = await settingService.findByUserName(username);

    return res.json(settings);
  }

  async update(req: Request, res: Response) {
    const { username } = req.params;
    const { chat } = req.body;
    const settingService = new SettingsService();

    const settings = await settingService.update(username, chat);

    return res.json(settings);
  }
}

export default SettingController;
