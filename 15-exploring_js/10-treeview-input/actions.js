function getTreeViewTag() {
  return $(".root").attr("rel");
}
function getExpandCollapseButton() {
  return '<button class="expand-collapse-button"></button>';
}
function expandAndCollapseByButton() {
  $(this).siblings(".node-label, .root-label").trigger("click");
}
function expandAndCollapseRootNodeByLabel() {
  const currentNode = $(this).parent();
  const rootChild = $(".nodes[rel=" + currentNode.attr("rel") + "]");
  if (!currentNode.hasClass("child-expanded")) {
    currentNode.addClass("child-expanded");
    const thisPos = currentNode.offset();
    rootChild.css({ left: thisPos.left, top: thisPos.top + currentNode.height() - 1 }).slideDown("fast");
  } else {
    rootChild.slideUp("fast", function () { currentNode.removeClass("child-expanded"); });
  }
}
function expandAndCollapseSubNodesByLabel() {
  const $this = $(this);
  const currentNode = $this.parent();
  if (!currentNode.hasClass("child-expanded")) {
    currentNode.addClass("child-expanded");
    $this.siblings(".node").slideDown("fast");
  } else {
    $this.siblings(".node").slideUp("fast", function () { currentNode.removeClass("child-expanded"); });
  }
}
function selectAllNodes() {
  const $this = $(this);
  const currentNode = $this.parent();
  const rootChild = $(".nodes[rel=" + currentNode.attr("rel") + "]"); // The node that contains all the elements of hierarchy;
  rootChild.find("input.node-checkbox").prop("checked", $this.prop("checked"));
  currentNode.trigger("checkboxesUpdate");
}
function uncheckAllSubNodes(currentCheckbox, currentNode, rootCheckbox) {
    // If unchecked uncheck all the ancestors
    currentNode.parents(".node").children("input.node-checkbox").prop("checked", currentCheckbox.prop("checked"));
    // also uncheck the root
    rootCheckbox.prop("checked", false);
}
function checkAllSubNodes(currentNode, rootCheckbox) {
  const $parentNode = currentNode.parent(".node");
  const $parentNodeCheckbox = $parentNode.children("input.node-checkbox");
  // If checked check for the siblings state and check the parent if all siblings are checked too
  const allCheckboxesInCurrentDepth = $parentNode.find(".node .node-checkbox").length;
  const allCheckedCheckboxesInCurrentDepth = $parentNode.find(".node .node-checkbox:checked").length;
  // all nodes in and below siblings are checked
  if (allCheckboxesInCurrentDepth === allCheckedCheckboxesInCurrentDepth) {
    // check the parent
    if ($parentNodeCheckbox.length) {
      $parentNodeCheckbox.prop("checked", true);
    } else {
      rootCheckbox.prop("checked", true);
    }
  }
}
function selectAllSubNodes() {
  const currentCheckbox = $(this);
  const currentNode = currentCheckbox.parent();  
  const rootChild = currentCheckbox.parents(".nodes"); // The node that contains all the elements of hierarchy;
  const rel = rootChild.attr("rel"); // Identifier (rel attribute of current hierarchy root)
  const $root = $(".root[rel=" + rel + "]");
  const rootCheckbox = $(".root[rel=" + rel + "] .root-checkbox");
  // take care of children | Easy one
  currentCheckbox.siblings(".node").find("input.node-checkbox").prop("checked", currentCheckbox.prop("checked"));
  //take care of parents | tough one
  if (!currentCheckbox.prop("checked")) {
    uncheckAllSubNodes(currentCheckbox, currentNode, rootCheckbox);
  } else {
    checkAllSubNodes(currentNode, rootCheckbox);
  }
  $root.trigger("checkboxesUpdate", [rootChild.find(".node-checkbox:checked")]);
}