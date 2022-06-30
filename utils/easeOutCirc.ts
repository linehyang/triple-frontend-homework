export function easeOutCirc(x: number): number {
  //reference : https://easings.net/#easeOutCirc
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}
