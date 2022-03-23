function set() {
  $("head").append("<link>");
  var css = $("head").children(":last");
  css.attr({
    rel:  "stylesheet",
    type: "text/css",
    href: "./libs/treeview-input/styles/style.css"
 });
}

export { set };