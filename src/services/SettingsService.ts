import { getCustomRepository, Repository } from 'typeorm';
import Setting from '../entities/Setting';
import SettingRepository from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingRepository);
  }

  // eslint-disable-next-line class-methods-use-this
  async create({ chat, username }: ISettingsCreate) {
    const userAlreadyExists = await this.settingsRepository.findOne({ username });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    return this.settingsRepository.save(settings);
  }

  async findByUserName(username: string) {
    const setting = await this.settingsRepository.findOne({ username });

    return setting;
  }

  async update(username: string, chat: boolean) {
    const settings = await this.settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :username', {
        username,
      })
      .execute();
  }
}

export default SettingsService;
