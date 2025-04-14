export default function concatArrays(array1, array2, string) {
  const mergedArray = [...array1, ...array2, ...string];
  return mergedArray;
}
