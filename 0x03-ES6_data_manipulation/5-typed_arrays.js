export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;
  return buffer;
}
