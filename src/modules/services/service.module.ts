import { Module } from '@nestjs/common';
import { CharacterService } from './random.service';
import { HttpModule } from '@nestjs/axios';


@Module({
    imports:[
        HttpModule
    ],
    exports:[CharacterService],
    providers:[
        CharacterService
    ]
})
export class ServicesModule { }