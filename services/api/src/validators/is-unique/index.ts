import {registerDecorator, ValidationOptions} from "class-validator";
import {IsUniqueConstraint} from "./is-unique-constraint";

// decorator options interface
export type IsUniqeInterface = {
  modelName: string;
  field?: string;
};

export function IsUnique(options: IsUniqeInterface, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: IsUniqueConstraint,
    });
  };
}

export * from "./is-unique-constraint";
