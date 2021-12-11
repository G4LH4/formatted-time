// Check if the format exist on the params
export const checkExistenceParam = (param1, param2, format) => {
  if (!param1[format] && !param2[format])
    throw new Error(`Word ${format} isn't on the list`);
};

export const checkStringParam = (param1, param2) => {
  if (typeof param1 !== "string" || typeof param2 !== "string")
    throw new Error("Only strings are supported");
};

export const checkType = (param1) => {
  if (param1 === undefined) {
    return null;
  }
};

export const checkFormat = (format) => {
  if (!format) throw new Error("The format is required");
};

export const checkOptions = (options, format) => {
  if (options === undefined) throw new Error(`${format} is not supported`);
};

export const checkInstance = (par1, instance) => {
  if (!par1 instanceof instance) {
    throw new Error(`The parameter must be ${instance}`);
  }
};

export const checkBothCamps = (par1, par2) => {
  if (!par1 || !par2) {
    throw new Error("Both camps are required");
  }
};

export const checkCamp = (par1) => {
  if (!par1) throw new Error("The parameter is required");
};
