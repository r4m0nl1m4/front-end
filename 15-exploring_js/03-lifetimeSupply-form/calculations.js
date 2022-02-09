function getLifetimeSupply(age = 0, amountPerDay = 3, supplyPrice = 20) {

  var ageMax = 85;
  var daysPerYear = 365;
  var lifetimeSupplyPrice = (ageMax-age)*daysPerYear*amountPerDay*supplyPrice;

  return "You will need $" + lifetimeSupplyPrice + " to have a supply up to " + ageMax + " years.";

}