// Checks the length of the param
export const checkArgs = (params, paramLength) => {
  if (params.length < paramLength) {
    throw new Error("Invalid params length");
  }
};

// Check if the param its a string
export const checkTypeString = (params) => {
  if (typeof params !== "string") throw new Error("Invalid type of param");
};

// Check if the format exist on the params
export const checkExistenceParam = (param1, param2, format) => {
  if (!param1[format] && !param2[format])
    throw new Error(`Word ${format} isn't on the list`);
};
