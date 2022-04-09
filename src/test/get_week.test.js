import { test } from "uvu";
import * as assert from "uvu/assert";

import { getDay } from "../commands/week/getDay.js";

const tests = [
  {
    callback: getDay,
    args: [new Date(2022, 3, 9)],
    expected: "Saturday",
  },
];

const get_day_test = () => {
  for (const item of tests) {
    test(item.callback(...item.args), () => {
      assert.is(item.callback(...item.args), item.expected);
    });

    test.run();
  }
};

export default get_day_test;
