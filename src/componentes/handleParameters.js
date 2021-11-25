export const checkArgs = (params, paramLength) => {
  if (params.length < paramLength) {
    throw new Error("Invalid params!");
  }
};

export const checkType = (params) => {
  if (typeof params !== "string") throw new Error("Invalid type of param");
};
