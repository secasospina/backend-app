import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './schemas/character.schemas';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([
      {
        name:Character.name,
        schema:CharacterSchema
      }
    ]
    )
  ],
  exports:[
    MongooseModule
  ]
})
export class DatabaseModule {}