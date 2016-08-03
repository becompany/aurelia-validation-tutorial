import {ValidationController, validateTrigger} from "aurelia-validation";
import {inject, NewInstance} from "aurelia-dependency-injection";


@inject(NewInstance.of(ValidationController))
export class App {

  public person = {
    firstName: "",
    lastName: ""
  }

  public country = "";

  constructor(private validationController: ValidationController) {
    // trigger validations manually
    // validationController.validateTrigger = validateTrigger.manual;
  }

  public submit() {
    if (this.validationController.validate().length <= 0) {
      alert("Validation successful!");
    } else {
      alert("Validation failed!");
    }
  }
}
