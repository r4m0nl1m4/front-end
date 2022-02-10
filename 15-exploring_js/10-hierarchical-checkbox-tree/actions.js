function getRelationship() {
  const $this = $(this);
  var firstAncestor = $this.closest(".hierarchy-checkboxes").attr("rel");
  $this.attr("rel", firstAncestor);
}
function expandAndCollapseByButton() {
  $(this).siblings(".hierarchy-label, .hierarchy-root-label").trigger("click");
}
function expandAndCollapseRootNodeByLabel() {
  const $this = $(this);
  const currentNode = $this.parent();
  const rootChild = $(".hierarchy-root-child[rel=" + currentNode.attr("rel") + "]");
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
    $this.siblings(".hierarchy-node").slideDown("fast");
  } else {
    $this.siblings(".hierarchy-node").slideUp("fast", function () { currentNode.removeClass("child-expanded"); });
  }
}
function selectAllNodes() {
  const $this = $(this);
  const currentNode = $this.parent();
  const rootChild = $(".hierarchy-root-child[rel=" + currentNode.attr("rel") + "]"); // The node that contains all the elements of hierarchy;
  rootChild.find("input.hierarchy-checkbox").prop("checked", $this.prop("checked"));
  currentNode.trigger("checkboxesUpdate");
}
function uncheckAllSubNodes(currentCheckbox, currentNode, rootCheckbox) {
    // If unchecked uncheck all the ancestors
    currentNode.parents(".hierarchy-node").children("input.hierarchy-checkbox").prop("checked", currentCheckbox.prop("checked"));
    // also uncheck the root
    rootCheckbox.prop("checked", false);
}
function checkAllSubNodes(currentNode, rootCheckbox) {
  const $parentNode = currentNode.parent(".hierarchy-node");
  const $parentNodeCheckbox = $parentNode.children("input.hierarchy-checkbox");
  // If checked check for the siblings state and check the parent if all siblings are checked too
  const allCheckboxesInCurrentDepth = $parentNode.find(".hierarchy-node .hierarchy-checkbox").length;
  const allCheckedCheckboxesInCurrentDepth = $parentNode.find(".hierarchy-node .hierarchy-checkbox:checked").length;
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
  const rootChild = currentCheckbox.parents(".hierarchy-root-child"); // The node that contains all the elements of hierarchy;
  const rel = rootChild.attr("rel"); // Identifier (rel attribute of current hierarchy root)
  const $root = $(".hierarchy-checkboxes[rel=" + rel + "]");
  const rootCheckbox = $(".hierarchy-checkboxes[rel=" + rel + "] .hierarchy-root-checkbox");
  // take care of children | Easy one
  currentCheckbox.siblings(".hierarchy-node").find("input.hierarchy-checkbox").prop("checked", currentCheckbox.prop("checked"));
  //take care of parents | tough one
  if (!currentCheckbox.prop("checked")) {
    uncheckAllSubNodes(currentCheckbox, currentNode, rootCheckbox);
  } else {
    checkAllSubNodes(currentNode, rootCheckbox);
  }
  $root.trigger("checkboxesUpdate", [rootChild.find(".hierarchy-checkbox:checked")]);
}