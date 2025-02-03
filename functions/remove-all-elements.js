function removeAllElements(node) {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
}

export { removeAllElements };
