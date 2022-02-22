function setEvents() {
  $(".root .nodes ul li").hide();
  $(".root .nodes ul ul").hide();
  
  $(".root .nodes").attr("rel", getTreeViewTag).appendTo("body");

  $(".root, .nodes ul").prepend(getExpandCollapseButton);

  $(".root-label").on("click", expandAndCollapseByLabel);
  $(".root-label").trigger("click");

  $(".node .node-label").on("click", expandAndCollapseByLabel);

  $(".expand-collapse-button").on("click", triggerSiblingsLabels);

  //$(".root-checkbox").on("change", selectAllNodes);

  //$(".node .node-checkbox").on("click", selectAllSubNodes);  
}