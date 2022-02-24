function setEvents() {
  $(".root ul li").hide();
  $(".root ul ul").hide();
  
  $(".root").attr('rel', getTreeViewTag);

  $(".root, ul").prepend(getExpandCollapseButton);

  $(".root-label").on('click', expandAndCollapseByLabel);
  $(".root-label").trigger('click');

  $(".node .node-label").on('click', expandAndCollapseByLabel);

  $(".expand-collapse-button").on('click', triggerSiblingsLabels);

  //$(".root-checkbox").on('change', selectAllNodes);

  //$(".node .node-checkbox").on('click', selectAllSubNodes);  
}