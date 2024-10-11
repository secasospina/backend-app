import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";


interface IdCharacter {

    name:string;
    image:string;
    type:string;

}

@Injectable()
export class CharacterService{

    constructor(
        private readonly httpService: HttpService
    ){}
    async getRandomCharacter(){

        const functions = [
            this.getPokemon,
            this.getRickAndMorti,
            this.getRickAndMorti
        ]

        const functionToUse = functions [Math.floor(Math.random()*3)]
        const id = Math.floor(Math.random()*700)
        return functionToUse(id,this.httpService)

    }


    async getRickAndMorti (id:number,http:HttpService):Promise<IdCharacter>{
        const BASE_URL = `https://rickandmortyapi.com/api/character/${id}`

        const {data} = await firstValueFrom(http.get(BASE_URL))
        console.log(data)
        return{
            name:data.name,
            image:data.image,
            type:"Rick and morty"
        }
    }
    async getPokemon (id:number, http:HttpService):Promise<IdCharacter>{
        const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        const {data} = await firstValueFrom(http.get(BASE_URL))
        console.log(data)
      //  const response = await this.httpService.get(BASE_URL)
        return{
            name:data.name,
            image:data.sprites.front_default,
            type:"Pokemon"
        }
    }
    async getSuperHero (id:number,http:HttpService):Promise<IdCharacter>{
        const BASE_URL = `https://www.superheroapi.com/api.php/77f893144e3b0ec98b0c3c0cc468d168/${id}`
        const {data} = await firstValueFrom(http.get(BASE_URL))
        console.log(data)
       /// const response = await this.httpService.get(BASE_URL)
        return{
            name:data.name,
            image:data.image.url,
            type:"Super Hero"
        }
    }

} 