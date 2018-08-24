interface DomNode {
    val: string;
    children?: Array<DomNode>;
}

interface bnryDomNode {
    value: string;
    left?: bnryDomNode;
    right?: bnryDomNode;
}

function convertBinToNary(dom: bnryDomNode): DomNode {
    let naryDom: DomNode = { val: dom.value };
    let output: DomNode = convertBToNary(dom, naryDom, naryDom.children = []);
    return output;
}


function convertBToNary(dom: bnryDomNode, tree: DomNode, children: Array<DomNode>): DomNode {

    if (dom.left) {
        // console.log("LEFT: In Left Node - Before adding to parent's child array", tree, tree.children)
        let node: DomNode = { val: dom.left.value }
        children.push(node);
        // console.log("LEFT: In Left Node - After adding to parent's child array", tree, children)
        // console.log("LEFT: Current node children are not touched", tree.children)
        convertBToNary(dom.left, node, children)
        // console.log("LEFT: After going through rest of tree", tree);

    }

    if (dom.right) {
        if (!tree.children) {
            tree.children = []
        }
        // console.log("RIGHT: In Right Node - Before adding to children ", tree, tree.children)
        let node: DomNode = { val: dom.right.value }
        tree.children.splice(0, 0, node);
        // console.log("RIGHT: In Right Node - After adding to children ", tree, tree.children)
        convertBToNary(dom.right, node, tree.children);
        // console.log("RIGHT: After going through rest of tree", tree);

    }
    // console.log("Tree returned", tree);
    return tree;
}