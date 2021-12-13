# What is this?

This library was made whit the purpose of use easier way to get the date

# Installation

`npm i formatted-time --save`

Then you can do:

```js
import { currentTime, preciseTime } from "formatted-time";

currentTime({ type: "type", format: "format" });
preciseTime({ type: "type", format: "format" || format });

// E.g
currentTime({
  type: "arr",
  format: "Y", // Only strings are supported
});

// Output: [2021]

// E.g
const format = "December 15, 2015, 13:13:31";

preciseTime({
  type: "arr",
  format: format,
});

// Output: [ 2015-12-15T16:15:00.000Z ]
```

# You can change the date to:

By default it will always be returned as a string

- type: arr
- type: nmb
- type: str

# CurrentTime Options available

Normal date:

- currentTime: For the current time
- today: For the day's date
- Y: For year
- M: For month
- D: For the date
- d: For the day
- h: For hours
- m: For minutes
- s: For seconds
- ms: For milliseconds

UTC date:

- currentTime: For the utc current time
- today: For the utc day's date
- uY: For utc year
- uM: For utc month
- uD: For utc date
- ud: For utc day
- uH: For utc hours
- um: For utc minutes
- us: For utc minutes
- ums: For utc seconds

# PreciseTime Options available

Whatever is accepted by the native Date

// E.g

- December 17, 1995 03:24:00
- 1995-12-17T03:24:00
- 1995, 11, 17
- 1995, 11, 17, 3, 24, 0
- 628021800000

# Get Closer

```js

import { getCloser } from "formatted-time";

First param must be an array whit all the dates
const datesArray = [
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2010, 0, 1),
];

Second params must be the date that you want to compare
const dateNow = new Date(2021);

function getDate(date) {
  console.log(date);
}

getDate(getCloser(datesArray, dateNow));

// Output: { date: 2017-01-01T03:00:00.000Z, timeLeft: 1483239597979 }

```

# ConvertTime

daysConvert

- days to weeks
- days to years

hrConvert

- hours to minutes
- hours to milliseconds
- hours to seconds

mnConvert

- minutes to hours
- minutes to seconds
- minutes to milliseconds

msConvert

- milliseconds to seconds
- milliseconds to minutes

yearsConvert

- years to lusters
- years to century
- years to dog years

toDate

- convert param to date
# isAfter

- checks if a date comes after to another

# isBefore

- checks if a date comes before to another

# isDate

- checks if the param is a date

# itHappened

- checks if the date already happened

Week
# getDay

- check the day of the week of the param given 