// Removes all the children of the input parameter
function removeAllElements(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}

export { removeAllElements };
