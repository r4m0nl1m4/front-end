function getCircleArea(property = 2) {
  const PI = 3.14;
  return PI*property*property;
}
function getSquareArea(property = 5) {
  return property*property;
}
function getArea(property = 0, formula) {
  return formula(property);
}