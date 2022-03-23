import * as style from './js/style.js';
import * as events from './js/events.js';

function getNode(id,parent,value) {
  this.ID = id;
  this.PARENT = parent;
  this.VALUE = value;
}
function getTree(name,nodes) {
  this.NAME = name;
  this.NODES = nodes;
}
function getType(nodes, node) {
  if (node.PARENT == 0) {
    return "root";
  } 
  else {
    var count = Object.keys(nodes).length; //alert(count);
    for(let i=0; i<count; i++) {
      if(node.ID == nodes[i].PARENT) {
        return "node";
      }
    }
    return "leaf"
  }
}
function insertContainer(container) {
  if(!$(container).length) {
    $('body').html('<div class=' + container.substring(1) + '></div>');
  } 
  $(container).html('<div class="tree"></div>');
}
function insertRoot(node) {
  $(".tree").html(
    '<ul id="1" class="root" rel="test">'
  +   '<label class="root-label">' + node.VALUE + '</label>'
  + '</ul>'
  );
}
function insertNode(node) {
  $("#" + node.PARENT).append(
      '<ul id="' + node.ID + '"class="node">'
    +   '<input class="node-checkbox" type="checkbox">'
    +   '<label class="node-label">' + node.VALUE + '</label>'
    + '</ul>'
  );
}
function insertLeaf(node) {
  $("#" + node.PARENT).append(
      '<li id="' + node.ID + '"class="node leaf">'
    +   '<input class="node-checkbox" type="checkbox">'
    +   '<label class="node-label">' + node.VALUE + '</label>'
    + '</li>'
  );
}
function insertTree(tree, container = ".treeview-container") {
  insertContainer(container);
  var nodes = tree.NODES;
  var count = Object.keys(nodes).length;  
  for(let i=0; i<count; i++) {
    var node = nodes[i];
    var type = getType(nodes, node);    
    if(type == "root") {
      insertRoot(node);
    } else if (type == "node") {
      insertNode(node);
    } else if (type == "leaf") {
      insertLeaf(node);
    }
  }
  style.set();
  events.set();
}

export { getNode, 
         getTree,
         insertTree };