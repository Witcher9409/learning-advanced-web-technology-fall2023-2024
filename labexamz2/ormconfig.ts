import { User } from './src/entities/user.entity';
import { Feedback } from './src/entities/feedback.entity';
//import { Group } from './src/entities/group.entity';
import { FriendRequest } from './src/entities/friend-request.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'test',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '43228',
  entities: [User, Feedback, FriendRequest],
  synchronize: true,
};

export default config;
