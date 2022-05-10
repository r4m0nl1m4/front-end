import * as node from './node.js';

function set() {

  $(".root ul li").hide();
  $(".root ul ul").hide();

  $(".node-button").on('click', node.button.toggle);

  $(".root").children(".node-button").trigger('click');

  $(".node-label").on('click', node.button.trigger);
  
  $(".node-checkbox").on('click', node.checkbox.trigger);

  //$(".node-checkbox").on('click', node.checkbox.selectAllSubNodes); 

  //$(".root-checkbox").on('change', node.checkbox.selectAll);

}

function reset() {
  $(".root ul, .root li").each(function(i) {
    var ID = $(this).attr('id');
    node.label.toogleColor(ID,false);
  });
}

export { set, 
         reset };