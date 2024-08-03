import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Types} from "mongoose";
import {User, USER_MODEL} from "../user";

@Schema({
  timestamps: true,
})
export class PersonalInfo {
  @Prop({type: Types.ObjectId, ref: `${USER_MODEL}`})
  user: Types.ObjectId | User;

  @Prop({required: true})
  name: string;

  @Prop({required: true, unique: true})
  email: string;
}

export type PersonalInfoDocument = PersonalInfo & Document;

export const PERSONALINFO_MODEL = PersonalInfo.name; // PersonalInfo

export const PersonalInfoSchema = SchemaFactory.createForClass(PersonalInfo);
