function getDaysInYearsMonthsDays(totalAgeInDays = 0) {
    
  const daysInMonth = 30;
  const daysInYear = 365;
      
  var onlyYears = Math.trunc(totalAgeInDays/daysInYear);
  var onlyMonths = Math.trunc((totalAgeInDays-(onlyYears*daysInYear))/daysInMonth);
  var onlyDays = totalAgeInDays-(onlyMonths*daysInMonth)-(onlyYears*daysInYear);
  
  return onlyYears + ":" + onlyMonths + ":" + onlyDays;

}