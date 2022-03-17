function getNode(id,parent,value) {
  this.id = id;
  this.parent = parent;
  this.value = value;
}
function getTree(name,nodes) {
  this.name = name;
  this.nodes = nodes;
}
function getCoordinates(x,y) {
  this.x = x;
  this.y = y;
}
function notExist(paths,path) {
  const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  for (let i=0; i<paths.length; i++) {
    if ( equals(paths[i],path) ) {
      return false;
    }
  }
  return true;
}
function getMaxLength(paths) {
  var pathLength;
  for(let i=0; i<paths.length; i++) {
    pathLength = paths[i].length;
    for(let j=0; j<paths.length; j++) {
      if(pathLength < paths[j].length) {
        pathLength = paths[j].length;
      }
    }
  }
  return pathLength;
}
function getPathByCoordinates(paths,coordinates) {
  var path = new Array();
  var parentLevel = coordinates.x;
  var x = parentLevel;
  path.push(paths[coordinates.y][coordinates.x]);
  while (x != 0) {
    x--;
    path.unshift(paths[coordinates.y][x]);
  }
  return path;
}
function getPathsByLevel(paths,level) {
  var subPaths = new Array();
  var aux = new Array();
  var coordinates = new Array();
  coordinates = new getCoordinates(0,level);
  for(let i=0; i<paths.length; i++) {
    if (i==0) { aux = getPathByCoordinates(paths,coordinates); }
    else if (notExist(subPaths,aux)) {
      subPaths.push(aux);
    }
    coordinates = new getCoordinates(level,i);
    aux = getPathByCoordinates(paths,coordinates);
  }
  return subPaths.sort();
}
function getIDByPath(nodes,path) {
  const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
  var aux;
  for(let i=0; i<nodes.length; i++) {
    aux = getPathByNode(nodes,nodes[i]);
    if(equals(aux,path)) {
      return nodes[i].id;
    }
  }
  return false;
}
function getPathByNode(nodes,node) {
  var path = new Array();
  var parent = node.parent;
  path.push(node.value);
  while (parent != 0) {
    for(let i=0; i<nodes.length; i++) {
      if ( nodes[i].id == parent ) {
        path.unshift(nodes[i].value);
        parent = nodes[i].parent;
      }
    }
  }
  return path;
}
function directories2Paths(directories,name) {
  var paths = new Array;
  var count = Object.keys(directories).length;
  for (let i=0; i<count; i++) {
    var path = directories[i].split('/');
    path.shift();
    paths.push(path);
  }
  paths.sort();
  for(let i=0; i<paths.length; i++) { paths[i].unshift(name); }
  return paths;
}
function paths2nodes(paths) {
  var nodes = new Array(), id, parent, value;
  var subPaths = new Array(), parentPath = new Array();
  for(let level=0; level<getMaxLength(paths); level++) {
    if(level==0) {
      id=1;
      parent=0;
      value = paths[0][0];
      nodes.push(new getNode(id,parent,value));
    } else {
      subPaths = getPathsByLevel(paths, level);
      for (let i=0; i<subPaths.length; i++) { 
        id++;
        parentPath = getPathByCoordinates(subPaths,i,(level-1)); 
        parent = getIDByPath(nodes,parentPath); //alert('i='+i+' level='+level+'\npath='+subPaths[i]+'\ni='+i+' subLevel='+subLevel+'\nparentPath='+parentPath+'\nparent='+parent);
        value = subPaths[i][level];         
        if (value) nodes.push(new getNode(id,parent,value));
      }
    }
  }
  return nodes;
}
function getType(nodes,node) {
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
}
function directories2Tree(directories) { 
  var name = "Tree"
  var paths = directories2Paths(directories); 
  var nodes = paths2nodes(paths);
  var tree = new Array();
  tree = new getTree(name, nodes);  
  insertTree(tree);
}
function nodes2Tree(nodes) { 
  var name = "Tree"
  var tree = new Array();
  tree = new getTree(name, nodes);
  insertTree(tree);
}