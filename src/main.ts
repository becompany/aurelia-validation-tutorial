import {Aurelia} from "aurelia-framework"
import environment from "./environment";
import {SimpleValidationRenderer} from "./resources/validation/simple-validation-renderer";

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature("resources")
    .plugin("aurelia-validation")
    .plugin("aurelia-validatejs");

  aurelia.container.registerHandler(
    "simple-renderer",
    container => container.get(SimpleValidationRenderer));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin("aurelia-testing");
  }

  aurelia.start().then(() => aurelia.setRoot());
}
