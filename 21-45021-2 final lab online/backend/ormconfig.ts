import { User } from './src/entities/user.entity';

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';



import { products } from 'src/entities/product.entity';

import { UserProfile } from 'src/entities/user-profile.entity';
import { carts } from 'src/entities/cart.entity';
import { Admin } from 'src/entities/admin.entity';
import { AuthAdminModule } from 'src/admin/authAdmin/authAdmin.module';



const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'work',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  entities: [User, products, carts, UserProfile, Admin],
  synchronize: true,
};

export default config;
