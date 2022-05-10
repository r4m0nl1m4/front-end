import * as events from './js/events.js';
import * as nodee from './js/node.js';

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
function setstyle() {  
  $(".tree").css({
    'align-content':'center',
    'display':'contents',
    'justify-content':'center'
  });
  $(".root").css({
    'border-style':'solid',
    'border-color':'#ccc',
    'border-radius':'4px',
    'border-width':'1px',
    'margin':'0px',
    'padding':'5px',
    'width':'auto'
  });
  $(".root > .node-box").css({
    'display':'none'
  });
  $(".root .node-button").css({
    'background-color':'transparent',
    'border':'0px',
    'content':'" "',
    'float':'left',
    'font-size':'small',
    'height':'16px',
    'line-height':'normal',
    'margin-bottom':'0px',
    'margin-left':'0px',
    'margin-right':'0px',
    'margin-top':'1px',
    'padding':'0px',
    'vertical-align':'middle',
    'width':'16px'
  });
  $(".root > .node-checkbox").css({
    'display':'none'
  });
  $(".node, .leaf").css({
    'border-left-color':'#ccc',
    'border-left-style':'dotted',
    'border-left-width':'1px',
    'clear':'both',
    'list-style':'none',
    'margin-bottom':'1px',
    'margin-left':'7px',
    'margin-right':'0px',
    'margin-top':'1px',
    'padding-bottom':'0px',
    'padding-left':'8px',
    'padding-right':'0px',
    'padding-top':'0px'
  });
  $(".node-box").css({
    'border-collapse':'collapse',
    'float':'left',
    'height':'18px',
    'line-height':'normal',
    'margin-left':'-7px',
    'width':'9px'
  });
  $(".node-box-row-1").css({
    'border-bottom':'1px dotted #ccc',
    'height':'50%',
    'width':'100%'
  });
  $(".node-box-row-2").css({
    'height':'50%',
    'width':'100%'
  });
  $(".node .node-button").css({
    'border':'0px',
    'content':'" "',
    'float':'left',
    'font-size':'small',
    'height':'16px',
    'line-height':'normal',
    'margin-bottom':'0px',
    'margin-left':'-2px',
    'margin-right':'-3.5px',
    'margin-top':'1px',
    'padding':'0px',
    'vertical-align':'middle',
    'width':'16px'
  });
  $(".node-checkbox").css({
    'float':'left',
    'margin-bottom':'0px',
    'margin-left':'5px',
    'margin-right':'5px',
    'margin-top':'3px'
  });
  $(".node-label").css({
    'color':'black',
    'display':'contents',
    'font-size':'12px',
    'font-weight':'normal',
    'margin':'0px',
    'padding':'0px' 
  });
  $(".last").css({
    'border':'none',
    'clear':'both',
    'list-style':'none',
    'margin-bottom':'1px',
    'margin-left':'7px',
    'margin-right':'0px',
    'margin-top':'1px',
    'padding-bottom':'0px',
    'padding-left':'8px',
    'padding-right':'0px',
    'padding-top':'0px'
  });
  $(".last > .node-box .node-box-row-1").css({
    'border-bottom':'1px dotted #ccc',
    'border-left':'1px dotted #ccc',
    'height':'50%',
    'margin-left':'-1px',
    'padding-left':'1px',
    'padding-top':'1px',
    'width':'100%'
  });
  $(".last .node-button").css({
    'border':'0px',
    'content':'" "',
    'float':'left',
    'font-size':'small',
    'height':'16px',
    'line-height':'normal',
    'margin-bottom':'0px',
    'margin-left':'0px',
    'margin-right':'-3.5px',
    'margin-top':'1px',
    'padding':'0px',
    'vertical-align':'middle',
    'width':'16px'
  });
  if($(window).width()<=1100) {
    $(".root").css({
      'width':'-webkit-fill-available'
    });
  }
}
function insert(LABEL, ID = "#input", tree) {
  if(!$(ID+"-treeview").length) {
    $('body').html(
      '<div id=' + ID.substring(1) + '></div>'
    + '<div class="tree" id="0"></div>'
    );
  } 
  $(ID+"-treeview").html(
     '<label id="tree-label" for="tree">' + LABEL + '</label>'
  +  '<div class="tree" id="0"></div>'
  );
  var nodes = tree.NODES;
  var count = Object.keys(nodes).length;  
  for(let i=0; i<count; i++) {
    var node = nodes[i];
    var type = getType(nodes, node);
    nodee.insert(node, type);
  }
  $(".tree ul ul:last-child, .root li:last-child, .root ul li:last-child").addClass("last");
  setstyle();
  events.set(tree);
}
function reset() {
  events.reset();
}

export { getNode, 
         getTree,
         insert,
         reset };