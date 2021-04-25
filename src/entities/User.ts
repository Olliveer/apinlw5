import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  // eslint-disable-next-line camelcase
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default User;