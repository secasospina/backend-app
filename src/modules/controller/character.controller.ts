import { Controller, Get } from "@nestjs/common";
import { CharacterService } from "../services/random.service";


@Controller ()
export class CharacterController {
    constructor(
        private service:CharacterService
    ){}

    @Get("get/random-character")
    async getCharacter ():Promise<any>{

        return this.service.getRandomCharacter()

        
    }
    
}