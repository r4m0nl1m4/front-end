jQuery(function(){

  $(".hierarchy-checkboxes .hierarchy-root-child div div").hide();
  
  $(".hierarchy-checkboxes .hierarchy-root-child").attr("rel", getRelationship).appendTo("body");//.hide();

  $(".hierarchy-checkboxes, .hierarchy-root-child .hierarchy-node").prepend('<div class="expand-collapse-button"></div>');
  
  $(".expand-collapse-button").on("click", expandAndCollapseByButton);

  $(".hierarchy-root-label").on("click", expandAndCollapseRootNodeByLabel);

  $(".hierarchy-node .hierarchy-label").on("click", expandAndCollapseSubNodesByLabel);

  //$(".hierarchy-root-checkbox").on("change", selectAllNodes);

  //$(".hierarchy-node .hierarchy-checkbox").on("click", selectAllSubNodes);
  
});