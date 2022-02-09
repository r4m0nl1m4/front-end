jQuery(function(){

  $('#squareArea-form-output-container').hide();

  $('#squareArea-form').on("submit",function(e){

    e.preventDefault();
    
    $('#squareArea-form-output').empty();
    
    var side = ( $('#squareArea-form-input').val() ? $('#squareArea-form-input').val() : 5 );

    var squareArea = getArea(side, getSquareArea);

    $('#squareArea-form-output-container').show();
    $('#squareArea-form-output').append(squareArea);

  });

  $('#squareArea-form').on("reset",function(){
    $('#squareArea-form-output').empty();
    $('#squareArea-form-output-container').hide();
  });

  $('#circleArea-form-output-container').hide();

  $('#circleArea-form').on("submit",function(e){

    e.preventDefault();
    
    $('#circleArea-form-output').empty();
    
    var circleRadius = ( $('#circleArea-form-input').val() ? $('#circleArea-form-input').val() : 2 );

    var circleArea = getArea(circleRadius, getCircleArea);

    $('#circleArea-form-output-container').show();
    $('#circleArea-form-output').append(circleArea);

  });

  $('#circleArea-form').on("reset",function(){
    $('#circleArea-form-output').empty();
    $('#circleArea-form-output-container').hide();
  });

});