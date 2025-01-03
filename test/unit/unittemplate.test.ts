import { CarPark, escapeCarpark } from "../../src/template";

describe("We need to escape the car park", () => {
  it("The simplest would be a small car park where we are parked next to the exit", () => {
    const carPark = new CarPark([[2]]);
    const expectedRoute: string[] = [];
    expect(escapeCarpark(carPark)).toEqual(expectedRoute);
  });
  it("The car park is a bit bigger, but now we need to move one space to the right to exit", () => {
    const carPark = new CarPark([[2, 0]]);
    const expectedRoute: string[] = ["R1"];
    expect(escapeCarpark(carPark)).toEqual(expectedRoute);
  });
  it("The car park is even bigger; now we need to move three spaces to the right to exit", () => {
    const carPark = new CarPark([[2, 0, 0, 0]]);
    const expectedRoute: string[] = ["R3"];
    expect(escapeCarpark(carPark)).toEqual(expectedRoute);
  });
  it("Now we add a second floor so we first need to move down before going to the exit", () => {
    const carPark = new CarPark([
      [2, 0, 1, 0],
      [0, 0, 0, 0],
    ]);
    const expectedRoute = ["R2", "D1", "R1"];
    expect(escapeCarpark(carPark)).toEqual(expectedRoute);
  });
  it("On the second floor we also have the option to first move to the left to reach the stairs", () => {
    const carPark = new CarPark([
      [1, 0, 0, 2],
      [0, 0, 0, 0],
    ]);
    const expectedRoute = ["L3", "D1", "R3"];
    expect(escapeCarpark(carPark)).toEqual(expectedRoute);
  });
});
