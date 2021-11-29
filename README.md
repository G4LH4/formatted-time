# What is this?

This library was made whit the purpose of use easier way to get the date

# Installation

`npm i formatted-time --save`

Then you can do:

```
import { getFormattedTime } from 'formatted-time';

getFormattedTime(type: 'type', format: 'format');

// E.g
getFormattedTime({
    type: "arr",
    format: "Y",
});

// Output: [2021]

```

# Options available

Normal date:

- Y: For year
- M: For month
- D: For the date
- d: For the day
- h: For hours
- m: For minutes
- s: For seconds

UTC date: 

- uY: For utc year
- uM: For utc month
- uD: For utc date
- ud: For utc day
- uH: For utc hours
- um: For utc minutes
- us: For utc minutes
- ums: For utc seconds

# You can change the date to:

- type: arr
- type: nmb
- type: str
