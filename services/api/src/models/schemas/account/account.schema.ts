import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {hash} from "bcrypt";
import {Types} from "mongoose";
import { User, USER_MODEL } from "../user";

@Schema({
  timestamps: true,
})
export class Account {
  @Prop({type: Types.ObjectId, ref: `'${USER_MODEL}'`})
  user: Types.ObjectId | User;

  @Prop({required: true, select: false})
  password: string;

  @Prop({default: Date.now})
  createdAt: Date;
}

export type AccountDocument = Account & Document;

export const ACCOUNT_MODEL = Account.name; // Account

export const AccountSchema = SchemaFactory.createForClass(Account);

AccountSchema.pre("save", async function (next) {
  const hashedPassword = await hash(this.password, 10);
  this.password = hashedPassword;
  next();
});
