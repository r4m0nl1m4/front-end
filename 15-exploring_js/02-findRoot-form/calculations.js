function getQuadraticEquationRoot(a=1, b = 2, c = -15) {

  var roots = [[0, 0], [0, 0]];
  var determinant = b * b - 4 * a * c;

  if (determinant > 0) { // two real and distinct roots
    roots[0][0] = (-b + Math.sqrt(determinant)) / (2 * a);
    roots[1][0] = (-b - Math.sqrt(determinant)) / (2 * a);
    return "S = { " + roots[0][0] + ", " + roots[1][0] + " }";
  }
  else if (determinant == 0) { // two real and equal roots
    roots[0][0] = roots[1][0] = -b / (2 * a);
    return "S = { " + roots[0][0] + ", " + roots[1][0] + " }";
  }
  else { // roots are complex number and distinct
    roots[0] = [ -b / (2 * a), Math.sqrt(-determinant) / (2 * a) ];
    roots[1] = [ -b / (2 * a), -Math.sqrt(-determinant) / (2 * a) ];
    return "S = { " + roots[0][0] + "+" + roots[0][1] + "i" + ", " + roots[1][0] + "" + roots[1][1] + "i" + " }";
  }

}