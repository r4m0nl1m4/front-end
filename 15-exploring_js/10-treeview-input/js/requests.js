jQuery(function(){

    var url = "services/tree-sample.json";
    fetch(url)
      .then( response => response.json() )
      .then( tree => insertTree(tree) )
      .then( sucess => setEvents() )
      .catch( err => {
        alert("Service error!", err);
      });
 
});