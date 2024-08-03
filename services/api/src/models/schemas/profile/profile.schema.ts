import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Types} from "mongoose";
import {PersonalInfo, PERSONALINFO_MODEL} from "../personalInfo";
import {User, USER_MODEL} from "../user";

@Schema({
  timestamps: true,
})
export class Profile {
  @Prop({type: Types.ObjectId, ref: `${USER_MODEL}`})
  user: Types.ObjectId | User;

  @Prop({required: true, unique: true})
  username: string;

  @Prop({type: Types.ObjectId, ref: `${PERSONALINFO_MODEL}`, required: true})
  personalInfo: Types.ObjectId | PersonalInfo;
}

export type ProfileDocument = Profile & Document;

export const PROFILE_MODEL = Profile.name; // Profile

export const ProfileSchema = SchemaFactory.createForClass(Profile);

ProfileSchema.pre("findOne", function (next) {
  this.populate("personalInfo");
  next();
});
