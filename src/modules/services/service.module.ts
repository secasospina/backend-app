import { Module } from '@nestjs/common';
import { CharacterService } from './random.service';
import { HttpModule } from '@nestjs/axios';
import { DatabaseModule } from '../database/database.module';


@Module({
    imports:[
        HttpModule,
        DatabaseModule
    ],
    exports:[CharacterService],
    providers:[
        CharacterService
    ]
})
export class ServicesModule { }