function calculateStepsRight(
  exitPosition: number,
  currentPosition: number,
  route: string[]
) {
  const stepsRight = exitPosition - currentPosition;

  if (stepsRight > 0) {
    route.push(`R${stepsRight}`);
  }
}
export function escapeCarpark(carPark: number[][]): string[] {
  const route: string[] = [];
  if (carPark.length === 1) {
    const currentPosition = carPark[0].indexOf(2);
    const exitPosition = carPark[0].length - 1;
    calculateStepsRight(exitPosition, currentPosition, route);
  }

  if (carPark.length === 2) {
    const firstFloor = carPark[0];
    const secondFloor = carPark[1];
    const currentPosition = firstFloor.indexOf(2);
    const stairCasePosition = firstFloor.indexOf(1);
    calculateStepsRight(stairCasePosition, currentPosition, route);

    route.push("D1");

    const secondFloorExitPosition = secondFloor.length - 1;
    calculateStepsRight(secondFloorExitPosition, stairCasePosition, route);
  }

  return route;
}
