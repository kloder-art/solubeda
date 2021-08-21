export const parse = (strDimensions: string): Array<number> =>
  strDimensions.split('x').map((x: string) => parseInt(x, 10));

export const getLargest = (dimensions: Array<number>): number =>
  dimensions.reduce((accumulator = 0, currentValue: number) =>
    currentValue > accumulator ? currentValue : accumulator
  );
