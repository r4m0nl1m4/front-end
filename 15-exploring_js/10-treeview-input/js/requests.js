import * as treeview from '../libs/treeview-input/treeview.js';

var url = "./services/tree-sample.json";
fetch(url)
  .then( response => response.json() )
  .then( tree => jQuery(function(){ treeview.insertTree(tree, ".tree-container") }) )        
  .catch( err => alert("Service error!", err) );