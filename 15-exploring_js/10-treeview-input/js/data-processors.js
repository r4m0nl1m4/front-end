function insertTree(tree) {
  var count = Object.keys(tree.node).length; //alert(count);
  for(let i=0; i<count; i++) {
    if(tree.node[i].type == "root") {
      $(".tree").html(
          '<ul class="root" rel="test">'
        +   '<input class="root-checkbox" type="checkbox">'
        +   '<label class="root-label">' + tree.node[i].value + '</label>'
        +   '<ul id="1" class="nodes"></ul>'
      );
    } else if (tree.node[i].type == "node") {
      var parentID = "#" + tree.node[i].parent; //alert(parentID);
      var parentExist = $(parentID).length != 0; //alert(parentExist);
      if(parentExist) { //alert(tree.node[i].id + " parent exist!");
        $(parentID).append(
            '<ul id="' + tree.node[i].id + '"class="node">'
          +   '<input class="node-checkbox" type="checkbox">'
          +   '<label class="node-label">' + tree.node[i].value + '</label>'
          + '</ul>'
        );
      } else {
        //alert("Error! Parent node not exist!");
      }
    } else if (tree.node[i].type == "leaf") {
      var parentID = "#" + tree.node[i].parent; //alert(parentID);
      var parentExist = $(parentID).length != 0; //alert(parentExist);
      if(parentExist) { //alert(tree.node[i].id + " parent exist!");
        $(parentID).append(
            '<li id="' + tree.node[i].id + '"class="node leaf">'
          +   '<input class="node-checkbox" type="checkbox">'
          +   '<label class="node-label">' + tree.node[i].value + '</label>'
          + '</li>'
        );
      } else {
        //alert("Error! Parent node not exist!");
      }
    }
  }
  //return true;
}