import { loadFeature, defineFeature } from "jest-cucumber";
import { templateFunction } from "../../src/template";

const feature = loadFeature("./cucumber/features/template.feature");

defineFeature(feature, (test) => {
  test("It works!", ({
    given,
    when,
    then,
  }) => {
    let output = -1;

    given(/^the template works$/, () => {
      expect(templateFunction).toBeTruthy();
    });

    when(/^the user tries to take half of (\d+)$/, (input: string) => {
      output = templateFunction(parseInt(input));
    });

    then(/^the result is (\d+)$/, (expected: string) => {
      expect(output).toEqual(parseInt(expected));
    });
  });
});
