jQuery(function(){

  $('#output').hide();

  $('#input-form').on("submit",function(e){

    e.preventDefault();
    
    $('#output-totalAgeInYearsMonthsDays').empty();

    var totalAgeInDays = $('#input-totalAgeInDays').val();
    var totalAgeInYearsMonthsDays = getDaysInYearsMonthsDays(totalAgeInDays);
    
    alert(totalAgeInYearsMonthsDays);

    $('#output').show();
    $('#output-totalAgeInYearsMonthsDays').append(totalAgeInYearsMonthsDays);

  });

  $('#input-form').on("reset",function(){
    $('#output-totalAgeInYearsMonthsDays').empty();
    $('#output').hide();
  });

});