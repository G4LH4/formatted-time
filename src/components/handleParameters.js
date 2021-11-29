// Check if the format exist on the params
export const checkExistenceParam = (param1, param2, format) => {
  if (!param1[format] && !param2[format])
    throw new Error(`Word ${format} isn't on the list`);
};
