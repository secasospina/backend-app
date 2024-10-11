
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {} from "mongoose"


@Schema({
    timestamps:true
})
export class Character{
    @Prop ({type:String})
    name:string;

    @Prop ({type:String})
    image:string;

    @Prop ({type:String})
    type:string

    @Prop ({type:Number})
    likes:number;

    @Prop ({type:Number})
    dislikes:number;


}

export const CharacterSchema = SchemaFactory.createForClass(Character)
