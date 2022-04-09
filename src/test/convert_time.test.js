import { test } from "uvu";
import * as assert from "uvu/assert";

import {
  daysToWeeks,
  daysToYear,
  hrToMn,
  hrToMs,
  hrToSc,
  mnToMs,
  mnToHr,
  mnToSc,
  msToSc,
  msToMn,
  yrsToLuster,
  yrsToCentury,
  yrsToDogYrs,
  toDate,
} from "../commands/convertTime/convert_time.js";

const tests = [
  {
    callback: daysToWeeks,
    args: [14],
    expected: 2,
  },
  {
    callback: daysToYear,
    args: [365],
    expected: 1,
  },
  {
    callback: hrToMn,
    args: [1],
    expected: 60,
  },
  {
    callback: hrToMs,
    args: [1],
    expected: 3600000,
  },
  {
    callback: hrToSc,
    args: [1],
    expected: 3600,
  },
  {
    callback: mnToMs,
    args: [1],
    expected: 60000,
  },
  {
    callback: mnToHr,
    args: [1],
    expected: 0.0167,
  },
  {
    callback: mnToSc,
    args: [1],
    expected: 0.0167,
  },
  {
    callback: msToSc,
    args: [100000],
    expected: 100,
  },
  {
    callback: msToMn,
    args: [60000],
    expected: 1,
  },
  {
    callback: yrsToLuster,
    args: [1],
    expected: 0.2,
  },
  {
    callback: yrsToCentury,
    args: [1],
    expected: 0.01,
  },
  {
    callback: yrsToDogYrs,
    args: [1],
    expected: 7,
  },
];

const convert_time_test = () => {
  for (const item of tests) {
    test(item.callback, () => {
      assert.is(item.callback(...item.args), item.expected);
    });

    test.run();
  }
};

export default convert_time_test;
