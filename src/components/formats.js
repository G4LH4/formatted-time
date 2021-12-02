class FORMATS {
  complexFormats(format, type, time, utcTime, switchOptions, checkOptions) {
    const FORMATS = {
      arr: (format) => {
        const arrFormat = [];

        console.log(format);

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

        return options;
      },
    };
    return FORMATS[type](format);
  }

  easyFormats(format, type, switchOptions) {
    const FORMATS = {
      arr: (format) => {
        const arrFormat = [];

        console.log(format);

        const options = switchOptions(format);

        // Insert the data into the array
        arrFormat.push(options);

        return arrFormat;
      },
      str: (format) => {
        const options = switchOptions(format);

        const formatToStr = options.toString();

        return formatToStr;
      },
      nmb: (format) => {
        const options = switchOptions(format);

        return options;
      },
    };

    return FORMATS[type](format);
  }
}

export default FORMATS;
