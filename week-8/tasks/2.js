function compare(a, b, callback1, callback2) {
  if (a > b) {
    return callback1();
  } else if (a < b) {
    return callback2();
  }
}
compare(
  2,
  3,
  () => "a is more then b",
  () => "a is less then b"
);
