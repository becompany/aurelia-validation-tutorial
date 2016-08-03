import {validationRenderer, ValidationError} from "aurelia-validation";

@validationRenderer
export class SimpleValidationRenderer {

  public render(error: ValidationError, target: Element): void {
    target.parentElement.querySelector(".error").textContent = error.message;
  }

  public unrender(error: ValidationError, target: Element): void {
    target.parentElement.querySelector(".error").textContent = "";
  }
}
