export default function getListStudentsByLocation(arr, city) {
  return arr.filter((item) => item.location === city);
}
