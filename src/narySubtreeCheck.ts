/**
 * @todo : add this regex to match val's value if it is string
 * regex : /^[a-zA-Z]/g
 */
export interface DomNode {
  val: string;
  children?: Array<DomNode>;
}

// Method 1
export function isSubtree(dom: DomNode, vdom: DomNode, k: number): boolean {
  return stringFromPreOrder(dom, k).indexOf(stringFromPreOrder(vdom, k)) > -1;
}

function stringFromPreOrder(tree: DomNode, k: number): string {
  let treeString = "";
  let absentNodes = k;
  treeString += tree.val;
  if (tree.children) {
    absentNodes -= tree.children.length;
    for (let node of tree.children) {
      treeString += stringFromPreOrder(node, k);
    }
  }
  treeString += Array(absentNodes + 1).join("$");
  return treeString;
}

//Method 2
export function containsTree(dom: DomNode, vdom: DomNode): boolean {
  if (!vdom) {
    return true;
  }

  return subtree(dom, vdom);
}

function subtree(dom: DomNode, vdom: DomNode): boolean {
  if (!dom) {
    return false;
  } else if (dom.val === vdom.val && matchTree(dom, vdom)) {
    return true;
  }

  if (dom.children) {
    for (let node of dom.children) {
      if (subtree(node, vdom)) {
        return true;
      }
    }
  }
  //dom.val != vdom.val
  return false;
}

function matchTree(dom: DomNode, vdom: DomNode): boolean {
  let bigChildrenLength: number = 0;
  let smallChildrenLength: number = 0;

  if (dom.children !== undefined) {
    bigChildrenLength = dom.children.length;
  }

  if (vdom.children !== undefined) {
    smallChildrenLength = vdom.children.length;
  }

  if (!dom && !vdom) {
    return true; //Both empty trees are a match
  } else if (!dom || !vdom) {
    return false; //tree empty, does not match
  } else if (dom.val !== vdom.val) {
    return false; //does not match
  } else if (bigChildrenLength !== smallChildrenLength) {
    return false; //Child nodes of trees are not equal
  } else if (
    dom.children &&
    vdom.children &&
    bigChildrenLength === smallChildrenLength
  ) {
    let childrenMatch: boolean = true;
    for (let i = 0; i < dom.children.length; i++) {
      childrenMatch = matchTree(dom.children[i], vdom.children[i]);
      if (!childrenMatch) {
        return childrenMatch;
      }
    }
    return childrenMatch;
  } else if (dom.val === vdom.val) {
    return true;
  }

  return false;
}
