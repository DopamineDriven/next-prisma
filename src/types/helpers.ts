import { BufferEncodingOptions } from "@/utils/reusable-buffer";

export type ReturnTypeMixinOg<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : any;

export type ReturnTypeMixinV2<
  T extends (...args: Enumerable<any extends infer U ? U : any>) => any
> = T extends (
  ...args: any extends ReturnType<infer U> ? ReturnType<U> : ReturnType<T>
) => infer R
  ? R
  : T;

export type TalVez<T> = T extends PromiseLike<infer U>
  ? PromiseLike<U | Record<keyof T, U>>
  : PromiseLike<unknown | Record<keyof T, unknown>> extends Record<
      keyof T,
      infer P
    >
  ? Record<keyof T, P>
  : Record<keyof T, unknown> extends Promise<infer U | null>
  ? Promise<U | null>
  : Promise<unknown extends infer V ? V : unknown | null>;

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

export type Maybe<T> = T | null;

export type InputMaybe<T> = Maybe<T>;

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

type Values<T extends Record<string, unknown>> = T[keyof T];

type Tuplize<T extends Record<string, unknown>[]> = Pick<
  T,
  Exclude<
    keyof T,
    Extract<keyof Record<string, unknown>[], string> | number
  >
>;

type _OneOf<T extends Record<string, unknown>> = Values<{
  [K in keyof T]: T[K] & {
    [M in Values<{ [L in keyof Omit<T, K>]: keyof T[L] }>]?: undefined;
  };
}>;

export type OneOf<T extends Record<string, unknown>[]> = _OneOf<
  Tuplize<T>
>;

abstract class A<
  T extends number extends { [index: string | number | symbol]: infer U }
    ? U
    : number
> {
  obj;

  constructor(obj: Record<string | number | symbol, T>) {
    this.obj = obj;
  }
  // [inferred]
  // constructor A<T extends number>(obj: Record<string, T>): A<T>
}

class B extends A<0> {
  constructor(public readonly i: number extends infer U ? U : number) {
    super({ i: 0 });
    // [inferred]
    // constructor A<0>(obj: Record<string, 0>): A<0>
  }

  stringify() {
    return JSON.stringify(
      {
        i: this.i as number, // i: number
        sup: super.obj as Record<string, 0> // sup: { [x: string]: 0; }
      },
      null,
      2
    );
  }

  objValueOfCompare(valOne: number, valTwo: number) {
    return valOne === valTwo ? true : false;
  }

  truthyCheck() {
    const extractValueFromSuper = Object.values(super.obj)[0].valueOf();
    const iIsValueOfObjRecord = <
      T extends typeof this.i extends Record<string, infer U>
        ? U
        : typeof this.i
    >(
      objectCompare: T
    ) => {
      const extractThisInjectedObjectValue =
        Object.values(objectCompare)[0].valueOf();
      return this.objValueOfCompare(
        extractValueFromSuper,
        extractThisInjectedObjectValue
      );
    };
    return iIsValueOfObjRecord; // returns True
  }
}

// By declaring each index of the super obj in the constructor you can input a unique comma-delimited Int/Float value on a
// per field basis. This allows you to key into fields within the Record -- eg, `this.i` or `this.j`
class C extends A<3.14 | -7.28> {
  constructor(
    public readonly i: number extends infer U ? U : number,
    public readonly j: number extends infer U ? U : number
  ) {
    super({ i: 3.14, j: -7.28 });

    // [inferred]:
    // constructor A<3.14 | -7.28>(obj: Record<string, 3.14 | -7.28>): A<3.14 | -7.28>
  }

  // thisObj deconstruction/reconstruction helper
  thisObjByIndex(thisIndex: number) {
    const extractKeyFromThisObj = Object.keys(this.obj)[
      thisIndex
    ].toString();
    const extractValueFromThisObj = Object.values(this.obj)[
      thisIndex
    ].valueOf();
    return { extractKeyFromThisObj, extractValueFromThisObj };
  }

  // superObj deconstruction/reconstruction helper
  superObjByIndex(superIndex: number) {
    const extractKeyFromSuperObj = Object.keys(super.obj)[
      superIndex
    ].toString();
    const extractValueFromSuperObj = Object.values(super.obj)[
      superIndex
    ].valueOf();
    return { extractKeyFromSuperObj, extractValueFromSuperObj };
  }

  // intraObject equality cross-check
  crossCompareIntraObjectEquality() {
    // thisObj
    //keys
    const iKey = this.thisObjByIndex(0).extractKeyFromThisObj;
    const jKey = this.thisObjByIndex(1).extractKeyFromThisObj;
    // values
    const iValue = this.thisObjByIndex(0).extractValueFromThisObj;
    const jValue = this.thisObjByIndex(1).extractValueFromThisObj;
    // reconstructed reconstructed intraobject equality check
    const thisTruthyObj = {
      [iKey]: iValue === this.i ? true : false, // returns true
      [jKey]: jValue === this.j ? true : false // returns true
    };

    // superObj
    // keys
    const iSuperKey = this.superObjByIndex(0).extractKeyFromSuperObj;
    const jSuperKey = this.superObjByIndex(1).extractKeyFromSuperObj;
    // values
    const iSuperVal = this.superObjByIndex(0).extractValueFromSuperObj;
    const jSuperVal = this.superObjByIndex(1).extractValueFromSuperObj;
    // reconstructed intraobject equality check
    const superTruthyObj = {
      [iSuperKey]: iSuperVal === this.i ? true : false,
      [jSuperKey]: jSuperVal === this.j ? true : false
    };

    // testing for intraobject key/value equality
    return thisTruthyObj === superTruthyObj ? true : false; // returns True!
  }

  // thisObj
  recreateSuperObjFromDeconstructedThisMethods() {
    //keys
    const iKey = this.thisObjByIndex(0).extractKeyFromThisObj;
    const jKey = this.thisObjByIndex(1).extractKeyFromThisObj;
    // values
    const iValue = this.thisObjByIndex(0).extractValueFromThisObj;
    const jValue = this.thisObjByIndex(1).extractValueFromThisObj;
    // reconstructed reconstructed intraobject equality check
    return {
      [iKey]: iValue,
      [jKey]: jValue
    };
    // outputs expected shape & key/value combos

    // [LOG]: {
    //    "i": 3.14,
    //    "j": -7.28
    // }
  }

  // superObj
  recreateSuperObjByIndex() {
    // keys
    const iSuperKey = this.superObjByIndex(0).extractKeyFromSuperObj;
    const jSuperKey = this.superObjByIndex(1).extractKeyFromSuperObj;
    // values
    const iSuperValue = this.superObjByIndex(0).extractValueFromSuperObj;
    const jSuperValue = this.superObjByIndex(1).extractValueFromSuperObj;
    return {
      [iSuperKey]: iSuperValue,
      [jSuperKey]: jSuperValue
    };
  }

  crossCompareRebuiltThisAndSuperObjects() {
    return this.recreateSuperObjFromDeconstructedThisMethods() ===
      this.recreateSuperObjByIndex()
      ? true
      : false;
  } // returns True!!
}
// Boolean constructor wrapper used since calling these methods without initializing them within a Class can throw errors
console.log(Boolean(new B(0).truthyCheck)); // Returns True!
console.log(
  Boolean(new C(3.14, -7.28).crossCompareRebuiltThisAndSuperObjects)
); // returns True!

/**
 *
 *
 *   excludeStringNullableField<StringNullableFilter, Key extends keyof StringNullableFilter>(
    stringNullableFilter: StringNullableFilter,
    ...keys: Key[]
  ): Omit<StringNullableFilter, Key> {
    for (const key of keys) {
      delete stringNullableFilter[key];
    }
    return stringNullableFilter;
  }
 */
export type PropGetters<TObj extends Record<string, any>> = {
  [TKey in string &
    keyof TObj as `get${Capitalize<TKey>}`]: () => TObj[TKey];
};

// Record<string, any> extended by TObj to resolve a type error on line 16 in its absence
// pertaining to: newObj[getterKey] = () => obj[key]
export function createGetterObject<TObj extends Record<string, any>>(
  obj: TObj
): PropGetters<TObj> {
  const newObj: any = {};
  for (const key of Object.keys(obj)) {
    const capitalizedKey = key[0].toUpperCase() + key.substr(1);
    const getterKey = `get${capitalizedKey}`;
    newObj[getterKey] = () => obj[key];
  }
  return newObj;
}

export interface IStorage {
  load<T>(key: string): T | undefined;
  save<T>(key: string, data: T): void;
  remove(key: string): void;
}

export default interface ISession {
  jwt: string;
  user: {
    name: string;
    email: string;
    image: string;
  };
  id: number;
  expires: string;
}
export type Sin<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type MutuallyExclusive<T, U> = T | U extends object
  ? (Sin<T, U> & U) | (Sin<U, T> & T)
  : T | U;
export type UnwrapAwaitable<T> = T extends PromiseLike<infer U> ? U : T;

export type Enumerable<T> = T | Array<T>;

export type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends Promise<infer X>
      ? X
      : UnwrapAwaitable<Tuple[K]>
    : UnwrapAwaitable<Tuple[K]>;
};

export class SetUtil<T> {
  /**
   * Creates a set that contains those elements of arrayOne that are also in arrayTwo.
   * @param arrayOne
   * @param arrayTwo
   */
  constructor(private arrayOne: T[], private arrayTwo: T[]) {
    arrayOne = this.arrayOne;
    arrayTwo = this.arrayTwo;
  }
  intersection<T>(arrayOne: T[], arrayTwo: T[]): Set<T> {
    return new Set(
      [...arrayOne].filter(value => arrayTwo.includes(value))
    );
  }

  /**
   * Creates a set that contains those elements of arrayOne that are not in arrayTwo
   * @param arrayOne
   * @param arrayTwo
   */
  difference<T>(arrayOne: T[], arrayTwo: T[]): Set<T> {
    const difference = new Set(arrayOne);

    for (const value of arrayTwo) {
      difference.delete(value);
    }

    return difference as Set<T>;
  }
}
// returns Set (3) {1, 2, 4}
// const arrayOne = [1, 2, 3, 4];
// const arrayTwo = [1, 2, 4, 5];

// const x = new SetUtil(arrayOne, arrayTwo).intersection(arrayOne, arrayTwo);

// const y = x.entries().next();

// returns Set (1) {3}
// returns Set (1) {5}
// const arrayOne = [1, 2, 3, 4];
// const arrayTwo = [1, 2, 4, 5];

// const x = new SetUtil(arrayOne, arrayTwo).difference(arrayOne, arrayTwo);
// const y = new SetUtil(arrayTwo, arrayOne).difference(arrayTwo, arrayOne);
// console.log(x)
// console.log(y)

/**
 * Applies Partial utility type to all nested objects.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/**
 * Interface of the simple literal object with any string keys.
 */
export interface ObjectLiteral {
  [key: string]: unknown;
}

/**
 * Makes an interface with all optional values to require AT LEAST one of them.
 */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

/* Makes an interface with all optional values to accept ONLY one of them */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

export type Constructor = { new (...args: any[]): any };

export type MaybeEnumerable<T> = (T | Array<T>) | null;

export type UnEnumerate<T> = T extends Array<infer U> ? U : T;

export type GetScalarType<T, O> = O extends Record<string, unknown>
  ? { [P in keyof T]: P extends keyof O ? O[P] : never }
  : never;

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * @type XOR is needed to have a real mutually exclusive union type
 * @url
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types}
 */
export type XOR<T, U> = T | U extends Record<string, unknown>
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

export type ValidObjects =
  | BigInt
  | Date
  | Buffer
  | File
  | Record<string, unknown>;

export type IsObject<T> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends ValidObjects
  ? False
  : T extends File
  ? False
  : T extends Record<string, unknown>
  ? True
  : False;

export type Key = string | number | symbol;

export type Keys<U> = U extends unknown ? keyof U : never;

export type True = 1;
export type False = 0;

/**
 * @type Boolean
 * @description A [[Boolean]]
 */
export type Boolean = True | False;

/**
 *@type ImmutablePick<T, K extends keyof T> = { [P in K]: T[P]; };
 *  @description From T, pick a set of properties whose keys are in the union K
 *
 */

export type ImmutablePick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type __Either<
  O extends Record<string, unknown>,
  K extends Key
> = Omit<O, K> &
  {
    // Merge all but K
    [P in K]: ImmutablePick<O, P & keyof O>; // With K possibilities
  }[K];

export type RawCompute<A> = A extends () => Record<string, unknown>
  ? A
  : {
      [K in keyof A]: A[K];
    } & Record<string, unknown>;

export type RecursiveConditional<O> = {
  [K in keyof O]?: O[K];
} & Record<string, unknown>;

export type _Record<K extends keyof any, T> = {
  [P in K]: T;
};

export type _Strict<U, _U = U> = U extends unknown
  ? U & RecursiveConditional<_Record<Exclude<Keys<_U>, keyof U>, never>>
  : never;

export type Strict<U extends Record<string, unknown>> = RawCompute<
  _Strict<U>
>;

export type EitherStrict<
  O extends Record<string, unknown>,
  K extends Key
> = Strict<__Either<O, K>>;

export type EitherLoose<
  O extends Record<string, unknown>,
  K extends Key
> = RawCompute<__Either<O, K>>;

export type _Either<
  O extends Record<string, unknown>,
  K extends Key,
  strict extends 0 | 1
> = {
  [0]: EitherStrict<O, K>;
  [1]: EitherLoose<O, K>;
}[strict];

export type Either<
  O extends Record<string, unknown>,
  K extends Key,
  strict extends 1
> = O extends unknown ? _Either<O, K, strict> : never;
export const fractionateDateTime = (w: string) => w.split(/[(T)]/);

export const fractionateDashSymbol = (x: string) => x.split(/([-])/);

export const fractionateCommaDelimitedData = (y: string) =>
  y.split(/([,])/);

export const fractionateAtSymbol = (z: string) => z.split(/([@])/);

export const stripDobYear = (dob: Date) => {
  return Number.parseInt(
    fractionateDateTime(new Date(dob).toISOString())[0],
    10
  );
};

export const stripEmailSubdomain = (email: string) => {
  const userEmailSubDomain = fractionateAtSymbol(email);
  return `${userEmailSubDomain[1]}${userEmailSubDomain[2]}`;
};

export const toBase64 = (
  str: WithImplicitCoercion<string | Uint8Array | readonly number[]>,
  encoding?: keyof typeof BufferEncodingOptions | undefined,
  start?: number | undefined,
  end?: number | undefined
) => {
  return Buffer.from(str).toString(encoding, start, end);
};

/**
 * @function localDateTimeFormatter
 * @returns a human readable timestamp with extended locale/TZ options
 */
export interface ClassType<T = any> {
  new (...args: any[]): T;
}
export const localDateTimeFormatter = (
  dateField: Date,
  tz: typeof Intl.DateTimeFormat[keyof typeof Intl.DateTimeFormat]
  // date?: { new (args: Date[keyof typeof Date.prototype]): any }
): string => {
  const newDateTZOffset = new Date(dateField).toLocaleString(typeof tz);
  const fragment = fractionateDateTime(newDateTZOffset);
  const yrTimeFragment = fractionateCommaDelimitedData(fragment[2]);
  const formattedLocalTime = `${yrTimeFragment[0]}-${fragment[1]}-${fragment[0]} at${yrTimeFragment[1]} GMT-5`;
  return formattedLocalTime;
};

export const getAgeHelper = (dob: Date | number): { age: string } => {
  const now = fractionateDateTime(new Date(Date.now()).toISOString())[0];
  const handleDobType =
    isNaN(dob.valueOf()) === false ? dob : new Date(dob).getMilliseconds();
  const userDob = fractionateDateTime(
    new Date(handleDobType).toISOString()
  )[0];

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
    const relativePercentYrComplete =
      (percentMonthElapsed + (month - 1)) / 12;
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
