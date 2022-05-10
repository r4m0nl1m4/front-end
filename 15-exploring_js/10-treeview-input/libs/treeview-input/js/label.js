
function toogleColor(ID,isTo) {
  if(isTo) {
    $("#"+ID+" > .node-label").css({'color':'#5A8E22'});
  } else {
    $("#"+ID+" > .node-label").css({'color':'black'});
  }
}

export { toogleColor };