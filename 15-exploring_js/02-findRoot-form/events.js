jQuery(function(){

  $('#findRoot-form-output-container').hide();

  $('#findRoot-form').on("submit",function(e){

    e.preventDefault();
    
    $('#findRoot-form-output-roots').empty();

    var a = ( $('#findRoot-form-input-a').val() ? $('#findRoot-form-input-a').val() : 1 );
    var b = ( $('#findRoot-form-input-b').val() ? $('#findRoot-form-input-a').val() : -1 );
    var c = ( $('#findRoot-form-input-c').val() ? $('#findRoot-form-input-a').val() : -2 );

    var roots = getQuadraticEquationRoot(a, b, c);
    
    alert(roots);

    $('#findRoot-form-output-container').show();
    $('#findRoot-form-output-roots').append(roots);

  });

  $('#findRoot-form').on("reset",function(){
    $('#findRoot-form-output-roots').empty();
    $('#findRoot-form-output-container').hide();
  });

});