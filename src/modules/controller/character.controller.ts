import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CharacterService } from "../services/random.service";

interface IBody{
    name:string,
    image:string
    type:string
}


@Controller ()
export class CharacterController {
    constructor(
        private service:CharacterService
    ){}

    @Get("get/random-character")
    async getCharacter ():Promise<any>{

        return this.service.getRandomCharacter()
    }
    

    @Get("find/:name")
    async find(@Param("name")name:string){
        return this.service.find(name)
    }

    @Post("like")
    async like(@Body() body:IBody){
        return await this.service.like(body)
    }



    @Post("dislike")
    async dislike(@Body() body:IBody){
        return await this.service.dislike(body)
    }


}