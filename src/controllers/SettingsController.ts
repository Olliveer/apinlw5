import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import SettingRepository from '../repositories/SettingsRepository';

class SettingController {
  // eslint-disable-next-line class-methods-use-this
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsRepository = getCustomRepository(SettingRepository);

    const settings = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(settings);

    return res.status(201).json(settings);
  }
}

export default SettingController;
