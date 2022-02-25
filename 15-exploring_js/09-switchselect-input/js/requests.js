fetch("services/selector.json")
  .then( response => response.json() )
  .then( options => insertSelectOptions(options) )
  .catch( err => alert("Service error!", err) );