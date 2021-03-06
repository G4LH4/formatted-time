class FORMATS {
  complexFormats(format, type, time, utcTime, switchOptions, checkOptions) {
    const FORMATS = {
      arr: (format) => {
        const arrFormat = [];

        const options = switchOptions(format, time, utcTime);

        checkOptions(options, format);

        // Insert the data into the array
        arrFormat.push(options);

        return arrFormat;
      },
      str: (format) => {
        const options = switchOptions(format, time, utcTime);

        checkOptions(options, format);

        const formatToStr = options.toString();

        return formatToStr;
      },
      nmb: (format) => {
        const options = switchOptions(format, time, utcTime);

        checkOptions(options, format);

        const parseOptions = parseInt(options);

        return parseOptions;
      },
    };
    checkOptions(FORMATS[type], type);

    return FORMATS[type](format);
  }

  easyFormats(format, type, switchOptions, checkOptions) {
    const checkDate = (options) => {
      if (options == "Invalid Date") throw new Error("Invalid Date format");
    };

    const FORMATS = {
      arr: (format) => {
        const arrFormat = [];

        const options = switchOptions(format);

        checkDate(options);

        // Insert the data into the array
        arrFormat.push(options);

        return arrFormat;
      },
      str: (format) => {
        // checkOptions(type, format);

        const options = switchOptions(format);

        checkDate(options);

        const formatToStr = options.toString();

        return formatToStr;
      },
      nmb: (format) => {
        // checkOptions(type, format);

        const options = switchOptions(format);

        checkDate(options);

        const parseOptions = parseInt(options);

        return parseOptions;
      },
    };

    checkOptions(FORMATS[type], type);
    return FORMATS[type](format);
  }
}

export default FORMATS;
