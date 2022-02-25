function insertInSelect(selectOption) {
  $("#options").append("<option>" + selectOption + "</option>");
}
function insertSelectOptions(selector) {
  var count = Object.keys(selector.options).length; //alert(count);
  for(let i=0; i<count; i++) insertInSelect(selector.options[i].content);
}