jQuery(function(){

  $('#lifetimeSupply-form-output-container').hide();

  $('#lifetimeSupply-form').on("submit",function(e){

    e.preventDefault();
    
    $('#lifetimeSupply-form-output').empty();
    
    var age = ( $('#lifetimeSupply-form-input-age').val() ? $('#lifetimeSupply-form-input-age').val() : 0 );
    var amountPerDay = ( $('#lifetimeSupply-form-input-amountPerDay').val() ? $('#lifetimeSupply-form-input-amountPerDay').val() : 3 );
    var supplyPrice = ( $('#lifetimeSupply-form-input-supplyPrice').val() ? $('#lifetimeSupply-form-input-supplyPrice').val() : 20 );

    var lifetimeSupplyPrice = getLifetimeSupply(age, amountPerDay, supplyPrice);
    
    alert(lifetimeSupplyPrice);

    $('#lifetimeSupply-form-output-container').show();
    $('#lifetimeSupply-form-output').append(lifetimeSupplyPrice);

  });

  $('#lifetimeSupply-form').on("reset",function(){
    $('#lifetimeSupply-form-output').empty();
    $('#lifetimeSupply-form-output-container').hide();
  });

});