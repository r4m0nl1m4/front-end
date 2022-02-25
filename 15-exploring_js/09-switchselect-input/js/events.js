jQuery(function(){                  
  
  $("#btnLeft").on("click", function () {
      $("#set-list").append($("#options option:selected"));
  });
  $("#btnRight").on("click", function () {
      $("#options").append($("#set-list option:selected"));
  });

  /*
  $("#input-reset-button").on("click", function () {
    while ($(selectID+"-list option").length) {
      $(selectID).append($(selectID+"-list option"));
    }
  });
  */
 
});