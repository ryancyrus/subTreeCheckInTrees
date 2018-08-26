export interface DomNode {
    val: string;
    children?: Array<DomNode>;
}


// Method 1
export function isSubtree(dom: DomNode, vdom: DomNode, k: number): boolean {
    return stringFromPreOrder(dom, k).indexOf(stringFromPreOrder(vdom, k)) > -1;
}

function stringFromPreOrder(tree: DomNode, k: number): string {
    let absentNodes = k;
    let treeString = tree.val === "" ? "^" : tree.val;
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
    /*Base Case
    If values don't match, return */
    if (dom.val !== vdom.val) {
        return false; //does not match
    }

    /*Now we know that the values are same
    Check if both of them has same number of children
    This allows us to cut short visit early.
    If any of them does not have any children then,
    dom.children will be undefined. 
     We change the length of children to zero
    in such case.*/
    let bigChildrenLength: number = 0;
    let smallChildrenLength: number = 0;

    if (dom.children !== undefined) {
        bigChildrenLength = dom.children.length;
    }

    if (vdom.children !== undefined) {
        smallChildrenLength = vdom.children.length;
    }

    if (bigChildrenLength !== smallChildrenLength) {
        return false; //Child nodes of trees are not equal
    } else if (dom.children && vdom.children && (bigChildrenLength === smallChildrenLength)) {
        /*Now the fact is established that both nodes have same values and
        same number of children. However, there can be zero children too.
        Therefore, we checked if children are present and they are same in numbers.*/
        let childrenMatch: boolean = true
        //We will now match each children of both nodes. 
        for (let i = 0; i < dom.children.length; i++) {
            childrenMatch = matchTree(dom.children[i], vdom.children[i])
            //If even one of them is not matched we will return false.
            if (!childrenMatch) {
                return childrenMatch;
            }
        }
        //All children matched, return true.
        return childrenMatch;
    }
    /*After covering above cases, we know that both nodes have same value and they dont have children
    Therefore we can simply return True.*/
    return true;
}