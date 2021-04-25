import { getCustomRepository } from 'typeorm';
import SettingRepository from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  // eslint-disable-next-line class-methods-use-this
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingRepository);

    const userAlreadyExists = await settingsRepository.findOne({ username });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const settings = settingsRepository.create({
      chat,
      username,
    });

    return settingsRepository.save(settings);
  }
}

export default SettingsService;
