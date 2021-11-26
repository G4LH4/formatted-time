export const checkArgs = (params, paramLength) => {
  if (params.length < paramLength) {
    throw new Error("Invalid params length");
  }
};

export const checkTypeString = (params) => {
  if (typeof params !== "string") throw new Error("Invalid type of param");
};
