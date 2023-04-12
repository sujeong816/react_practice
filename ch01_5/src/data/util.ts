export const makeArray = (length: number, value: any) => new Array(length).fill(value);

export const range = (min: number, max: number): number[] => makeArray(max - min, null).map((value, index) => index + min);

export const random = (min: number, max: number): number => Math.floor(Math.random()*(max-min))+min;