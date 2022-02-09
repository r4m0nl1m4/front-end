jQuery(function(){

  $('#d2ymd-form-output-container').hide();

  $('#d2ymd-form').on("submit",function(e){

    e.preventDefault();
    
    $('#d2ymd-form-output-totalAgeInYearsMonthsDays').empty();

    var totalAgeInDays = ( $('#d2ymd-form-input-totalAgeInDays').val() ? $('#d2ymd-form-input-totalAgeInDays').val() : 400 );
    
    var totalAgeInYearsMonthsDays = getDaysInYearsMonthsDays(totalAgeInDays);
    
    alert(totalAgeInYearsMonthsDays);

    $('#d2ymd-form-output-container').show();
    $('#d2ymd-form-output-totalAgeInYearsMonthsDays').append(totalAgeInYearsMonthsDays);

  });

  $('#d2ymd-form').on("reset",function(){
    $('#d2ymd-form-output-totalAgeInYearsMonthsDays').empty();
    $('#d2ymd-form-output-container').hide();
  });

});