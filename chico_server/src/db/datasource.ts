import { DataSource } from 'typeorm';

const connectDB = new DataSource({
  type: 'sqlite',
  logging: true,
  synchronize: false,
  entities: ['src/db/entities/**/*.ts'],
  migrations: ['src/db/migrations/*.ts'],
  database: './src/db/chico.sqlite'
});

connectDB
  .initialize()
  .then(() => {
    console.log(`Data Source has been initialized`);
  })
  .catch((err) => {
    console.error(`Data Source initialization error`, err);
  });

export default connectDB;
