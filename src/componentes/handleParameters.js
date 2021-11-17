export function checkArgs(params, paramLength) {
  if (params.length < paramLength) {
    throw new Error("Invalid params!");
  }
}
