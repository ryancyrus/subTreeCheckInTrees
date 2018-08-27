export interface DomNode {
    value: string;
    left?: DomNode;
    right?: DomNode;
}

//Method 1
export function isSubtree(dom: DomNode, vdom: DomNode): boolean {
    return stringFromPreOrder(dom).indexOf(stringFromPreOrder(vdom)) > -1;
}

function stringFromPreOrder(tree: DomNode): string {
    if (!tree) {
        return "$";
    }
    return (tree.value === "" ? "^" : tree.value) + stringFromPreOrder(tree.left) + stringFromPreOrder(tree.right);
}

console.log(stringFromPreOrder(null));