import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class PersonalInfo {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;
}

export type PersonalInfoDocument = PersonalInfo & Document;

export const PERSONALINFO_MODEL = PersonalInfo.name; // PersonalInfo

export const PersonalInfoSchema = SchemaFactory.createForClass(PersonalInfo);
