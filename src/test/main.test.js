import { test } from "uvu";
import * as assert from "uvu/assert";

// import { preciseTime } from "../commands/preciseTime.js";
// import { addTime } from "./commands/addTime.js";
// import { currentTime } from "./commands/currentTime.js";
import {
  daysToWeeks,
  daysToYear,
} from "../commands/convertTime/daysConvert.js";

test(daysToWeeks(14), () => {
  assert.is(daysToWeeks(14), 2);
});

test(daysToYear(365), () => {
  assert.is(daysToYear(365), 1);
});

test.run();
