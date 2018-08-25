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
        let node: DomNode = { val: dom.left.value }
        children.push(node);
        convertBToNary(dom.left, node, children)
    }

    if (dom.right) {
        if (!tree.children) {
            tree.children = []
        }
        let node: DomNode = { val: dom.right.value }
        tree.children.splice(0, 0, node);
        convertBToNary(dom.right, node, tree.children);

    }
    return tree;
}