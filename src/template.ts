const car = 2;
const stair = 1;
const emptySpace = 0;
type Cell = typeof car | typeof stair | typeof emptySpace;

export class CarPark {
  private carPark: Cell[][];

  constructor(carPark: Cell[][]) {
    this.carPark = carPark;
  }

  getCarPark() {
    return this.carPark;
  }

  getTopFloor() {
    return this.carPark[0];
  }

  getGroundFloor() {
    return this.carPark[this.carPark.length - 1];
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
export function escapeCarpark(carPark: CarPark): string[] {
  const route: string[] = [];
  const groundFloorExitPosition = carPark.getCarParkWidth();
  const carParkLevels = carPark.getCarParkLevels();
  if (carParkLevels === 1) {
    const currentPosition = carPark.getGroundFloor().indexOf(car);
    calculateStepsRight(groundFloorExitPosition, currentPosition, route);
  }

  if (carParkLevels === 2) {
    const topFloor = carPark.getTopFloor();
    const currentPosition = topFloor.indexOf(car);
    const stairCasePosition = topFloor.indexOf(stair);
    if (currentPosition < stairCasePosition) {
      calculateStepsRight(stairCasePosition, currentPosition, route);
    }
    if (currentPosition > stairCasePosition) {
      route.push(`L${currentPosition - stairCasePosition}`);
    }

    route.push("D1");

    calculateStepsRight(groundFloorExitPosition, stairCasePosition, route);
  }

  return route;
}
