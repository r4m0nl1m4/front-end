import * as actions from './actions.js';

function set() { //alert('set Events');

  $(".root ul li").hide();
  $(".root ul ul").hide();
  
  $(".root").attr('rel', actions.getTreeViewTag);

  $(".root, ul").prepend(actions.getExpandCollapseButton);

  $(".root-label").on('click', actions.expandAndCollapseByLabel);
  $(".root-label").trigger('click');

  $(".node .node-label").on('click', actions.expandAndCollapseByLabel);

  $(".expand-collapse-button").on('click', actions.triggerSiblingsLabels);

  //$(".root-checkbox").on('change', actions.selectAllNodes);

  //$(".node .node-checkbox").on('click', actions.selectAllSubNodes); 

}

export { set };