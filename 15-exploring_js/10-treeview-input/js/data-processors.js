function getType(nodes, node){
  if (node.parent == 0) {
    return "root";
  } 
  else {
    var count = Object.keys(nodes).length; //alert(count);
    for(let i=0; i<count; i++) {
      if(node.id == nodes[i].parent) {
        return "node";
      }
    }
    return "leaf"
  }
}
function insertRoot(node) {
  $(".tree").html(
    '<ul id="1" class="root" rel="test">'
  +   '<input class="root-checkbox" type="checkbox">'
  +   '<label class="root-label">' + node.value + '</label>'
  + '</ul>'
  );
}
function insertNode(node) {
  $("#" + node.parent).append(
      '<ul id="' + node.id + '"class="node">'
    +   '<input class="node-checkbox" type="checkbox">'
    +   '<label class="node-label">' + node.value + '</label>'
    + '</ul>'
  );
}
function insertLeaf(node) {
  $("#" + node.parent).append(
      '<li id="' + node.id + '"class="node leaf">'
    +   '<input class="node-checkbox" type="checkbox">'
    +   '<label class="node-label">' + node.value + '</label>'
    + '</li>'
  );
}
function insertTree(tree) {
  var nodes = tree.nodes;
  var count = Object.keys(nodes).length; //alert(count);
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
}