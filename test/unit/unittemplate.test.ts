import { escapeCarpark } from "../../src/template";

describe("We need to escape the car park", () => {
  it("The simplest would be a small car park where we are parked next to the exit", () => {
    const carPark = [[2]];
    const expectedRoute: string[] = [];
    expect(escapeCarpark(carPark)).toEqual(expectedRoute);
  });
});
