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
export function escapeCarpark(carPark: number[][]): string[] {
  const route: string[] = [];
  const groundFloorExitPosition = carPark[0].length - 1;
  if (carPark.length === 1) {
    const currentPosition = carPark[0].indexOf(2);
    calculateStepsRight(groundFloorExitPosition, currentPosition, route);
  }

  if (carPark.length === 2) {
    const firstFloor = carPark[0];
    const currentPosition = firstFloor.indexOf(2);
    const stairCasePosition = firstFloor.indexOf(1);
    calculateStepsRight(stairCasePosition, currentPosition, route);

    route.push("D1");

    calculateStepsRight(groundFloorExitPosition, stairCasePosition, route);
  }

  return route;
}
