# What is this?

This library was made whit the purpose of use easier way to get the date

# Installation

`npm i formatted-time --save`

Then you can do: 

```
import { getFormattedTime } from 'formatted-time';

getFormattedTime('Y-M-D h:m:s'); 

// E.g
'2021-11-16 18:40:13'

```

# Options available
* Y: For year
* M: For month
* D: For the date
* d: For the day
* h: For hours
* m: For minutes
* s: For seconds

Keep in main that any other character will be added to the string

```
getFormattedTime('Y-M-D h:m:s hello'); 

// E.g
'2021-11-16 18:40:13 hello'
```