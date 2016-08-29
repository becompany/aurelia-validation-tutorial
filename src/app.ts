import {ValidationController, validateTrigger, ValidationError} from "aurelia-validation";
import {inject, NewInstance} from "aurelia-dependency-injection";
import {SimpleValidationRenderer} from "./resources/validation/simple-validation-renderer";


@inject(NewInstance.of(ValidationController))
export class App {

  public person = {
    firstName: "",
    lastName: ""
  }

  public country = "";

  constructor(private validationController: ValidationController) {
    this.validationController.addRenderer(new SimpleValidationRenderer());
    // trigger validations manually
    // validationController.validateTrigger = validateTrigger.manual;
  }

  public submit() {
    this.validationController.validate()
      .then((errors: ValidationError[]) => {
        if(errors.length <= 0) {
          console.log("Validation successful!", errors);
        } else {
          console.log("Validation failed!", errors);
        }
      });
  }
}
