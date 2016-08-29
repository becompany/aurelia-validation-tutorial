import {bindable} from "aurelia-framework";
import {ValidationRules} from "aurelia-validation";

export class CountryDetail {
  @bindable
  public name: string;

  @bindable
  public validate: boolean = false;

  public constructor() {
    ValidationRules
      .ensure((c: CountryDetail) => c.name)
        .displayName("My super fancy country")
        .required()
        .when((c: CountryDetail) => c.validate == true)
      .on(this);
  }
}
