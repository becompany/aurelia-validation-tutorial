import {bindable} from "aurelia-framework";
import {ValidationRules} from "aurelia-validatejs";

export class PersonDetail {
  @bindable
  public person;

  public bind() {
    ValidationRules
      .ensure("firstName").required()
      .ensure("lastName").required({ message: "^My custom error message" })
      .on(this.person);
  }
}
