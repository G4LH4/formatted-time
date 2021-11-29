export const checkArgs = (params, paramLength) => {
  if (params.length < paramLength) {
    throw new Error("Invalid params length");
  }
};

export const checkTypeString = (params) => {
  if (typeof params !== "string") throw new Error("Invalid type of param");
};

export const checkExistenceParam = (param1, param2, format) => {
  if (!param1[format] && !param2[format])
    throw new Error(`Word ${format} isn't on the list`);
};
