export const checkRout = (arr, path) => {
  return arr.includes(path.replace(/[/ ]/g, ''));
};
