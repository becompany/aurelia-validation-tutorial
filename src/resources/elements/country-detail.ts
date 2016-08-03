import {bindable} from "aurelia-framework";
import {required} from "aurelia-validatejs";

export class CountryDetail {
  @bindable
  @required({ message: "^Another custom error message." })
  public name: string;
}
