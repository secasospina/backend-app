import { HttpService } from "@nestjs/axios";
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { firstValueFrom } from "rxjs";
import { Character } from "../database/schemas/character.schemas";
import { Model } from "mongoose";


interface IdCharacter {
    name:string;
    image:string;
    type:string;

}

interface IBody{
    name:string,
    image:string
    type:string
}

@Injectable()
export class CharacterService{

    constructor(
        private readonly httpService: HttpService,

        @InjectModel(Character.name) 
        private characterModel: Model<Character>

    ){}
    async getRandomCharacter(){

        const functions = [
            this.getPokemon,
            this.getRickAndMorti,
            this.getSuperHero,
            this.getNaruto
        ]

        const functionToUse = functions [Math.floor(Math.random()*4)]
        const id = Math.floor(Math.random()*700)
        return functionToUse(id,this.httpService)

    }


    async getRickAndMorti (id:number,http:HttpService):Promise<IdCharacter>{
        const BASE_URL = `https://rickandmortyapi.com/api/character/${id}`

        const {data} = await firstValueFrom(http.get(BASE_URL))
        return{
            name:data.name,
            image:data.image,
            type:"Rick and morty"
        }
    }
    async getPokemon (id:number, http:HttpService):Promise<IdCharacter>{
        const BASE_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
        const {data} = await firstValueFrom(http.get(BASE_URL))
        return{
            name:data.name,
            image:data.sprites.front_default,
            type:"Pokemon"
        }
    }
    async getSuperHero (id:number,http:HttpService):Promise<IdCharacter>{
        const BASE_URL = `https://www.superheroapi.com/api.php/77f893144e3b0ec98b0c3c0cc468d168/${id}`
        const {data} = await firstValueFrom(http.get(BASE_URL))
        return{
            name:data.name,
            image:data.image.url,
            type:"Super Hero"
        }
    }

    async getNaruto (id:number,http:HttpService):Promise<IdCharacter>{
        const BASE_URL = `https://narutodb.xyz/api/character/${id}`
        const {data} = await firstValueFrom(http.get(BASE_URL))
        return{
            name:data.name,
            image:data.images.length > 0? data.images [0] : "",
            type:"Naruto"
        }
    }

    async find(name:string){
        const data = await this.characterModel.findOne({name})
        if(!data){
            throw new BadRequestException ("No existe en la base de datos")
        }
        return data
    }


    async like (body:IBody){
        const {name, image, type} = body
        const data = await this.characterModel.findOne({name})
        if (!data){
            const created = await this.characterModel.create({
                name,
                image,
                type,
                likes:1,
                dislikes:0
            })
            return created
        }

        await data.updateOne ({likes: data.likes + 1})
        return await this.characterModel.findOne ({name})

    }

    async dislike (body:IBody){

        const {name, image, type} = body
        const data = await this.characterModel.findOne({name})
        if (!data){
            const created = await this.characterModel.create({
                name,
                image,
                type,
                likes:0,
                dislikes:1
            })
            return created
        }

        await data.updateOne ({dislikes: data.dislikes + 1})
        return await this.characterModel.findOne ({name})

    }

  async mosDisLike(){
    return this.characterModel.findOne().sort({ dislikes: -1})
  }

  async mosLikes(){
    return this.characterModel.findOne().sort({ likes:-1})
  }

  async lastEvaluated(){
    return this.characterModel.findOne().sort({
      updatedAt:-1
    })
  }

}