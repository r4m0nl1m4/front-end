import * as button from './button.js';
import * as checkbox from './checkbox.js';
import * as label from './label.js';

function insertNode(node, type) {
  $("#" + node.PARENT).append(
      '<ul class="' + type + '" id="' + node.ID + '">'
    +   '<div class="node-box">'
    +     '<div class="node-box-row-1"> &ensp; </div>'
    +     '<div class="node-box-row-2"> &ensp; </div>'
    +   '</div>'
    +   '<button class="node-button" type="button"> &#x25BA; </button>'
    +   '<input class="node-checkbox" type="checkbox">'
    +   '<label class="node-label">' + node.VALUE + '</label>'
    + '</ul>'
  );
}
function insertLeaf(node) {
  $("#" + node.PARENT).append(
      '<li class="leaf" id="' + node.ID + '">'
    +   '<div class="node-box">'
    +     '<div class="node-box-row-1"> &ensp; </div>'
    +     '<div class="node-box-row-2"> &ensp; </div>'
    +   '</div>'
    +   '<input class="node-checkbox" type="checkbox">'
    +   '<label class="node-label">' + node.VALUE + '</label>'
    + '</li>'
  );
}
function insert(node, type) {
  if(type == "root" || type == "node") {
    insertNode(node, type);
  } else if (type == "leaf") {
    insertLeaf(node);
  }
}

export { button,
         checkbox,
         insert,
         label };