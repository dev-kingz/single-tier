import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";
import {InjectConnection} from "@nestjs/mongoose";
import {Connection} from "mongoose";
import {Injectable} from "@nestjs/common";
import {IsUniqeInterface} from ".";

@ValidatorConstraint({async: true})
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  async validate(value: any, args: ValidationArguments) {
    console.log(args);
    const {modelName, field}: IsUniqeInterface = args.constraints[0];
    const model = this.connection.model(modelName);
    if (field) {
      const count = await model.countDocuments({[field]: value}).exec();
      return count === 0;
    }
    const count = await model.countDocuments({[args.property]: value}).exec();
    return count === 0;
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} already exists!`;
  }
}
