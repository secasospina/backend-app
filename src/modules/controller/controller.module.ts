import { Module } from "@nestjs/common";
import { CharacterController } from "./Character.controller";
import { CharacterService } from "../services/random.service";
import { ServicesModule } from "../services/service.module";




@Module({
    imports:[ServicesModule],
    exports:[],
    controllers:[
        CharacterController
    ]

})
export class ControllersModule{}