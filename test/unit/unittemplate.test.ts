import {
  CarPark,
  escapeCarpark,
  groupGoingDownStairCases,
  Cell,
} from "../../src/template";

describe("We need to escape the car park", () => {
  const testCases = [
    {
      description:
        "The simplest would be a small car park where we are parked next to the exit",
      carPark: [[2] as Cell[]],
      expectedRoute: [],
    },
    {
      description:
        "The car park is a bit bigger, but now we need to move one space to the right to exit",
      carPark: [[2, 0] as Cell[]],
      expectedRoute: ["R1"],
    },
    {
      description:
        "The car park is even bigger; now we need to move three spaces to the right to exit",
      carPark: [[2, 0, 0, 0] as Cell[]],
      expectedRoute: ["R3"],
    },
    {
      description:
        "Now we add a second floor so we first need to move down before going to the exit",
      carPark: [[2, 0, 1, 0] as Cell[], [0, 0, 0, 0] as Cell[]],
      expectedRoute: ["R2", "D1", "R1"],
    },
    {
      description:
        "On the second floor we also have the option to first move to the left to reach the stairs",
      carPark: [[1, 0, 0, 2] as Cell[], [0, 0, 0, 0] as Cell[]],
      expectedRoute: ["L3", "D1", "R3"],
    },
    {
      description: "Now we have a car park with three floors",
      carPark: [
        [0, 1, 0, 2] as Cell[],
        [0, 0, 1, 0] as Cell[],
        [0, 0, 0, 0] as Cell[],
      ],
      expectedRoute: ["L2", "D1", "R1", "D1", "R1"],
    },
    {
      description:
        "Now our car park has three floors of which the stair cases are on the same position",
      carPark: [
        [0, 1, 0, 2] as Cell[],
        [0, 1, 0, 0] as Cell[],
        [0, 0, 0, 0] as Cell[],
      ],
      expectedRoute: ["L2", "D2", "R2"],
    },
  ];

  testCases.forEach(({ description, carPark, expectedRoute }) => {
    it(description, () => {
      const carParkInstance = new CarPark(carPark);
      expect(escapeCarpark(carParkInstance)).toEqual(expectedRoute);
    });
  });
});

describe("Our route can now contain multiple operations to go down a stair. But when these occur directly after each other we want to combine them into one Down statement", () => {
  const testCases = [
    {
      description: "So a string which contains D1 only once will keep it",
      route: ["D1"],
      expectedRoute: ["D1"],
    },
    {
      description:
        "When we have two D1 statements after each other we want to combine them into one D2 statement",
      route: ["D1", "D1"],
      expectedRoute: ["D2"],
    },
    {
      description:
        "When we have three D1 statements after each other we want to combine them into one D3 statement",
      route: ["D1", "D1", "D1"],
      expectedRoute: ["D3"],
    },
    {
      description:
        "However, the D1 statement can be part of other statements which it need to leave untouched",
      route: ["R1", "D1", "R1"],
      expectedRoute: ["R1", "D1", "R1"],
    },
  ];

  testCases.forEach(({ description, route, expectedRoute }) => {
    it(description, () => {
      expect(groupGoingDownStairCases(route)).toEqual(expectedRoute);
    });
  });
});
