function collapse(label) { 
  var node = label.parent();
  $(node).children(".node-button").empty();
  $(node).children(".node-button").prepend("&#x25BA;");
  var rootChild = label.siblings(".node, .leaf");
  rootChild.slideUp("fast", function () { node.removeClass("child-expanded"); });
}
function expand(label) { 
  var node = label.parent();
  $(node).children(".node-button").empty();
  $(node).children(".node-button").prepend("&#x25BC;");
  label.siblings(".node, .leaf").slideDown("fast");
  node.addClass("child-expanded");
}
function toggle() {
  var label = $(this);
  const node = $(this).parent();
  if (node.hasClass("child-expanded")) {
    collapse(label);
  } else {
    expand(label);
  }
}
function trigger() {
  $(this).siblings(".node-button").trigger("click");
}

export { toggle,
         trigger };