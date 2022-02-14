jQuery(function(){

  $(".root .nodes div div").hide();
  
  $(".root .nodes").attr("rel", getRelationship).appendTo("body");//.hide();

  $(".root, .nodes .node").prepend('<span class="expand-collapse-button"></span>');
  
  $(".expand-collapse-button").on("click", expandAndCollapseByButton);

  $(".root-label").on("click", expandAndCollapseRootNodeByLabel);

  $(".node .node-label").on("click", expandAndCollapseSubNodesByLabel);

  //$(".root-checkbox").on("change", selectAllNodes);

  //$(".node .node-checkbox").on("click", selectAllSubNodes);
  
});
