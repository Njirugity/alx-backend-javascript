export default function getListStudentsIdsSum(arr) {
  return arr.reduce((acc, order) => acc + order.id, 0);
}
