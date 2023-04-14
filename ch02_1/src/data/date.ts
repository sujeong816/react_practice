import { DateTime } from "luxon";

export const makeRandomPastDate = (): Date => {
  const value = new Date().valueOf();
  return new Date(value - Math.floor(Math.random() * 10 * 24 * 60 * 60 * 1000));
};

export const randomRelativeDateString = (): string | null =>
  toRelativeDateString(makeRandomPastDate());

export const randomFullDateString = (): string =>
  toFullDAteString(makeRandomPastDate());

export const toRelativeDateString = (date: Date): string | null =>
  DateTime.fromJSDate(date).startOf("day").toRelative();

export const toFullDAteString = (date: Date): string =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
