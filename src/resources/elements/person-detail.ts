import {bindable} from "aurelia-framework";
import {ValidationRules} from "aurelia-validation";

export class PersonDetail {
  @bindable
  public person;

  public bind() {
    ValidationRules
      .ensure("firstName").required()
      .ensure("lastName").required().withMessage("My custom error message")
      .on(this.person);
  }
}
