import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomLoggerModule } from './logger/custom-logger.module';

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    CustomLoggerModule,
    ConfigModule.forRoot({
      isGlobal: true, // 全てのmoduleで使用できるように
      envFilePath: ENV === 'development' ? '.env.development' : `.env.${ENV}`, // NODE_ENVの値によって読み込むファイルを変更する
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
