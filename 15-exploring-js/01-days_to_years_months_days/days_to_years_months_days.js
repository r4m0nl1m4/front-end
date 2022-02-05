jQuery(function(){
  $('#input-form').on("submit",function(e){

    e.preventDefault();

    var totalAgeInDays = $('#input-totalAgeInDays').val(); // alert(totalAgeInDays);
    var daysInMonth = 30;
    var daysInYear = 365;
    
    var onlyYears = Math.trunc(totalAgeInDays/daysInYear);
    var onlyMonths = Math.trunc((totalAgeInDays-(onlyYears*daysInYear))/daysInMonth);
    var onlyDays = totalAgeInDays-(onlyMonths*daysInMonth)-(onlyYears*daysInYear);
    
    alert(onlyYears + ":" + onlyMonths + ":" + onlyDays);

    $('#output-totalAgeInYearsMonthsDays').append(onlyYears + ":" + onlyMonths + ":" + onlyDays);

  });
});