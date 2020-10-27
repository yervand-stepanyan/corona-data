export const checkIsNumber = string => {
  if (string) {
    return Number.isInteger(+string[string.length - 1]);
  }
  return string;
};
