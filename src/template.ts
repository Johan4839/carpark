export function escapeCarpark(carPark: number[][]): string[] {
  const route: string[] = [];
  const currentPosition = carPark[0].indexOf(2);
  const exitPosition = carPark[0].length - 1;
  const stepsRight = exitPosition - currentPosition;

  if (stepsRight > 0) {
    route.push(`R${stepsRight}`);
  }

  return route;
}
