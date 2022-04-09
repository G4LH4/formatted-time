// test
import { test } from "uvu";
import * as assert from "uvu/assert";

import { getCloser, getMinMax } from "../commands/getTime/get_time.js";

const tests = [
  {
    callback: getCloser,
    args: [new Date(2022, 3, 9), new Date(2022, 3, 10)],
    expected: new Date(2022, 3, 10),
  },
];

const get_time_test = () => {
  for (const item of tests) {
    test(item.callback(...item.args), () => {
      assert.is(item.callback(...item.args), item.expected);
    });

    test.run();
  }
};

export default get_time_test;
