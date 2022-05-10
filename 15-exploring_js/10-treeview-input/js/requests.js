import * as treeview from '../libs/treeview-input/treeview.js';

var url = "./services/tree-sample.json";
fetch(url)
  .then( response => response.json() )
  .then( tree => jQuery(function(){ treeview.insert("treeview sample:", "#input-treeview", tree) }) )        
  .catch( err => alert("Service error!", err) );