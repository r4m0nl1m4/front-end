import * as actions from './actions.js';

function set(tree) { //alert('set Events');

  $(".root ul li").hide();
  $(".root ul ul").hide();

  $(".node-label").on('click', actions.expandAndCollapse);

  $(".root").children(".node-label").trigger('click');

  $(".node-button").on('click', actions.triggerSiblingsLabels);

  //$(".root-checkbox").on('change', actions.selectAllNodes);

  //$(".node-checkbox").on('click', actions.selectAllSubNodes);

  $(".node-checkbox").on('click',function(){
    for (let i=0; i<tree.NODES.length; i++) {
      let isChecked = $("#"+tree.NODES[i].ID+" .node-checkbox").prop('checked');  
      if(isChecked) {
        $("#"+tree.NODES[i].ID+" .node-label").css({'color':'#5A8E22'});
      } else {
        $("#"+tree.NODES[i].ID+" .node-label").css({'color':'black'});
      }
    }
  });

}

export { set };