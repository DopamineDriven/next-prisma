import {
  fractionateDateTime,
  fractionateCommaDelimitedData,
  fractionateDashSymbol
} from "./helpers";

export const toBase64 = (
  str: WithImplicitCoercion<string | Uint8Array | readonly number[]>,
  start?: number | undefined,
  end?: number | undefined
) => {
  return Buffer.from(str).toString("base64", start, end);
};

/**
 * @function localDateTimeFormatter
 * @returns a human readable timestamp with extended locale/TZ options
 */

export const localDateTimeFormatter = (
  dateField: Date,
  tz: typeof Intl.DateTimeFormat[keyof typeof Intl.DateTimeFormat]
  // date?: { new (args: Date[keyof typeof Date.prototype]): any }
): string => {
  const newDateTZOffset = new Date(dateField).toLocaleString(typeof tz);
  const fragment = fractionateDateTime(newDateTZOffset);
  const yrTimeFragment = fractionateCommaDelimitedData(fragment[2]);
  const formattedLocalTime = `${yrTimeFragment[0]}-${fragment[1]}-${fragment[0]} at ${yrTimeFragment[1]} GMT-5`;
  return formattedLocalTime;
};

export const getAgeHelper = (dob: Date | number): { age: string } => {
  const now = fractionateDateTime(new Date(Date.now()).toISOString())[0];
  const handleDobType =
    isNaN(dob.valueOf()) === false ? dob : new Date(dob).getMilliseconds();
  const userDob = fractionateDateTime(new Date(handleDobType).toISOString())[0];

  const fractionateDob = fractionateDashSymbol(userDob);
  const fractionateNow = fractionateDashSymbol(now);

  const countDaysInMonth = ({
    dobMonth,
    dobYearVal
  }: {
    dobMonth: number;
    dobYearVal: number;
  }): { daysInMonth: number } => {
    return dobMonth.valueOf() === 0 || 2 || 4 || 6 || 7 || 9 || 11
      ? { daysInMonth: 31 }
      : dobMonth.valueOf() === 3 || 5 || 8 || 10
      ? { daysInMonth: 30 }
      : dobMonth.valueOf() === 1 && dobYearVal.valueOf() % 4 === 0
      ? { daysInMonth: 29 }
      : { daysInMonth: 28 };
  };

  const percentYr = ({
    year,
    month,
    day
  }: {
    year: number;
    month: number;
    day: number;
  }): { relativePercentYrComplete: number } => {
    const percentMonthElapsed =
      day /
      countDaysInMonth({ dobMonth: month.valueOf(), dobYearVal: year })
        .daysInMonth;
    const relativePercentYrComplete = (percentMonthElapsed + (month - 1)) / 12;
    return { relativePercentYrComplete };
  };

  const dobVal: number = percentYr({
    month: Number.parseInt(fractionateDob[2], 10),
    day: Number.parseInt(fractionateDob[4], 10),
    year: Number.parseInt(fractionateDob[0], 10)
  }).relativePercentYrComplete;

  const nowVal: number = percentYr({
    month: Number.parseInt(fractionateNow[2], 10),
    day: Number.parseInt(fractionateNow[4], 10),
    year: Number.parseInt(fractionateNow[0], 10)
  }).relativePercentYrComplete;

  const subYrAgeAdjusted = dobVal - nowVal;

  const yrsCalc =
    Number.parseInt(fractionateNow[0], 10) -
    Number.parseInt(fractionateDob[0], 10);

  const ageCalc = () => {
    return subYrAgeAdjusted !== 0 ? yrsCalc - subYrAgeAdjusted : yrsCalc;
  };
  return { age: ageCalc().toPrecision(4) + " yrs old" }; // to the hunderdth decimal value
};
