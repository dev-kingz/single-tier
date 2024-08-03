import {registerDecorator, ValidationOptions} from "class-validator";
import {ExistsConstraint} from "./exists.constraint";

// decorator options interface
export type ExistsInterface = {
  modelName: string;
  field?: string;
};

export function Exists(options: ExistsInterface, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: ExistsConstraint,
    });
  };
}

export * from "./exists.constraint";
