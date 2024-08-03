import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Types} from "mongoose";
import {hash} from "bcrypt";

@Schema({
  timestamps: true,
})
export class User {
  @Prop({required: true})
  name: string;

  @Prop({required: true, unique: true})
  username: string;

  @Prop({required: true, unique: true})
  email: string;

  @Prop({required: true, select: false})
  password: string;
}

export type UserDocument = User & Document;

export const USER_MODEL = User.name; // User

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre("save", async function (next) {
  const hashedPassword = await hash(this.password, 10);
  this.password = hashedPassword;
  next();
});
