jQuery(function(){

  $(".root .nodes ul li").hide();
  $(".root .nodes ul ul").hide();
  
  $(".root .nodes").attr("rel", getTreeViewTag).appendTo("body");//.hide();

  $(".root, .nodes ul").prepend(getExpandCollapseButton);

  $(".root-label").on("click", expandAndCollapseByLabel);
  $(".root-label").trigger("click");

  $(".node .node-label").on("click", expandAndCollapseByLabel);

  $(".expand-collapse-button").on("click", triggerSiblingsLabels);

  //$(".root-checkbox").on("change", selectAllNodes);

  //$(".node .node-checkbox").on("click", selectAllSubNodes);  

  var url = "ajax/tree-sample.json";
  $.getJSON(url, function (tree, status) {
    //alert(status);
    alert(tree.name);
    alert(tree.node[0].text)
  });
  
});