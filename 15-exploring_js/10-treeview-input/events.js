jQuery(function(){

  $(".root .nodes ul li").hide();
  $(".root .nodes ul ul").hide();
  
  $(".root .nodes").attr("rel", getTreeViewTag).appendTo("body");//.hide();

  $(".root, .nodes .node").prepend(getExpandCollapseButton);
  
  $(".expand-collapse-button").on("click", expandAndCollapseByButton);

  $(".root-label").on("click", expandAndCollapseRootNodeByLabel);

  $(".node .node-label").on("click", expandAndCollapseSubNodesByLabel);

  //$(".root-checkbox").on("change", selectAllNodes);

  //$(".node .node-checkbox").on("click", selectAllSubNodes);
  
});