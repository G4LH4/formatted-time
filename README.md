# What is this?

This library was made whit the purpose of use easier way to get the date

# Installation

`npm i formatted-time --save`

Then you can do:

```js
import { currentTime, preciseTime } from 'formatted-time';

currentTime({type: 'type', format: 'format'}); 
preciseTime({type: 'type', format: 'format' || format})

// E.g
currentTime({
    type: "arr",
    format: "Y", // Only strings are supported

});

// Output: [2021]

// E.g
const format = 'December 15, 2015, 13:13:31';

preciseTime({
    type: 'arr',
    format: format,
})

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
