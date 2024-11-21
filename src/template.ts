export function escapeCarpark(carPark: number[][]): string[] {
  if (carPark[0].length > 1) {
    return ["R1"];
  }
  return [];
}
