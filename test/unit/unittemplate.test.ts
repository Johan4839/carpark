import { escapeCarpark } from "../../src/template";

describe("We need to escape the car park", () => {
  it("The simplest would be a small car park where we are parked next to the exit", () => {
    const carPark = [[2]];
    const expectedRoute: string[] = [];
    expect(escapeCarpark(carPark)).toEqual(expectedRoute);
  });
  it("The car park is a bit bigger, but now we need to move one space to the right to exit", () => {
    const carPark = [[2, 0]];
    const expectedRoute: string[] = ["R1"];
    expect(escapeCarpark(carPark)).toEqual(expectedRoute);
  });
});
