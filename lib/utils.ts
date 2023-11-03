export const handleClassName = (
  flag: boolean,
  common: string,
  optional: string
) => {
  return flag ? common : optional;
};
