// Check if the format exist on the params
export const checkExistenceParam = (param1, param2, format) => {
  if (!param1[format] && !param2[format])
    throw new Error(`Word ${format} isn't on the list`);
};

export const checkStringParam = (param1, param2) => {
  if (typeof param1 !== "string" || typeof param2 !== "string")
    throw new Error("Only strings are supported");
};

export const checkCamps = (param1, param2) => {
  if (!param1 || !param2) throw new Error("Both camps are required");
};

export const checkOptions = (options, format) => {
  if (options === undefined) throw new Error(`${format} is not supported`);
};

export const checkFormats = (FORMATS, type) => {
  if (FORMATS[type] === undefined)
    throw new Error(`Type ${type} not supported`);
};

export const checkInput = (input, data) => {
  if (input === undefined) throw new Error(`${data} is not a valid input`);
};
