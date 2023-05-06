import {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    age: number;

}

export const UserSchema = SchemaFactory.createForClass(User);