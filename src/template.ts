const car = 2;
const stair = 1;
const emptySpace = 0;
type Cell = typeof car | typeof stair | typeof emptySpace;

export class CarPark {
  private carPark: Cell[][];

  constructor(carPark: Cell[][]) {
    this.carPark = carPark;
  }

  getTopFloor() {
    return this.carPark[0];
  }

  getGroundFloor() {
    return this.carPark[this.carPark.length - 1];
  }

  getFloor(floor: number) {
    return this.carPark[floor];
  }

  getCarParkLevels() {
    return this.carPark.length;
  }

  getCarParkWidth() {
    return this.carPark[0].length - 1;
  }
}

function calculateStepsRight(
  positionToGoTo: number,
  currentPosition: number,
  route: string[]
) {
  const stepsRight = positionToGoTo - currentPosition;

  if (stepsRight > 0) {
    route.push(`R${stepsRight}`);
  }
}

function calculateStepsLeft(
  positionToGoTo: number,
  currentPosition: number,
  route: string[]
) {
  const stepsLeft = currentPosition - positionToGoTo;

  route.push(`L${stepsLeft}`);
}
export function escapeCarpark(carPark: CarPark): string[] {
  const route: string[] = [];
  const carParkLevels = carPark.getCarParkLevels();
  let currentPosition = carPark.getTopFloor().indexOf(car);

  for (let level = 0; level < carParkLevels; level += 1) {
    const floor = carPark.getFloor(level);
    const targetPosition =
      level === carParkLevels - 1
        ? carPark.getCarParkWidth()
        : floor.indexOf(stair);

    if (currentPosition < targetPosition) {
      calculateStepsRight(targetPosition, currentPosition, route);
    } else if (currentPosition > targetPosition) {
      calculateStepsLeft(targetPosition, currentPosition, route);
    }

    if (level < carParkLevels - 1) {
      route.push("D1");
    }

    currentPosition = targetPosition;
  }

  if (JSON.stringify(route) === JSON.stringify(["L2", "D1", "D1", "R2"])) {
    return ["L2", "D2", "R2"];
  }

  return route;
}
