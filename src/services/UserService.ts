/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';

class UserService {
  async create(email: string) {
    const usersReposiroty = getCustomRepository(UsersRepository);

    const userExists = usersReposiroty.findOne({ email });

    if (userExists) {
      return userExists;
    }

    const user = usersReposiroty.create({ email });

    await usersReposiroty.save(user);

    return user;
  }
}

export default UserService;
