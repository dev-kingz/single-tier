import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Types} from "mongoose";
import {PersonalInfo, PERSONALINFO_MODEL} from "../personalInfo/personalInfo.schema";

@Schema({
  timestamps: true,
})
export class Profile {
  @Prop({required: true, unique: true})
  username: string;

  @Prop({type: Types.ObjectId, ref: PERSONALINFO_MODEL, required: true})
  personalInfo: Types.ObjectId | PersonalInfo;
}

export type ProfileDocument = Profile & Document;

export const PROFILE_MODEL = Profile.name; // Profile

export const ProfileSchema = SchemaFactory.createForClass(Profile);
