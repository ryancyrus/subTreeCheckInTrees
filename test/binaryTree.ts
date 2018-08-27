import { expect } from 'chai';
import { DomNode, isSubtree } from '../src/binarySubtreeCheck';

describe("Empty Trees cases", function (){
    it("Both trees empty - Is a subtree", function() {
        const dom: DomNode = null;
        const vdom: DomNode = null;
        
        expect(isSubtree(dom, vdom)).to.be.true;
    });

    it("Main tree is empty but other is not - Not a subtree", function() {
        const dom: DomNode = null;
        const vdom: DomNode = { value: "v"};
        
        expect(isSubtree(dom, vdom)).to.be.false;
    });

    it("Small tree is empty - Is a subtree", function() {
        const dom: DomNode = { value: "v"};
        const vdom: DomNode = null;
        
        expect(isSubtree(dom, vdom)).to.be.true;
    });
});

describe('Check subtree using Preorder traversal with termination markup.', function () {
    it("Original Test - Is a subtree", function () {
        const dom: DomNode = {
            value: "root",
            left: {
                value: "a",
                left: {
                    value: "c",
                    left: {
                        value: "g"
                    },
                    right: {
                        value: "h"
                    }
                },
                right: {
                    value: "d",
                    left: {
                        value: "i"
                    }
                }
            },
            right: {
                value: "b",
                left: {
                    value: "e",
                    right: {
                        value: "j",
                        left: {
                            value: "k"
                        },
                        right: {
                            value: "l"
                        }
                    }
                },
                right: {
                    value: "f"
                }
            }
        }

        const vdom: DomNode = {
            value: "a",
            left: {
                value: "c",
                left: {
                    value: "g"
                },
                right: {
                    value: "h"
                }
            },
            right: {
                value: "d",
                left: {
                    value: "i"
                }
            }
        }
        expect(isSubtree(dom, vdom)).to.be.true;
    });

    it("Tree 1: Test 1 - Not a subtree", function () {
        const dom: DomNode = {
            value: "root",
            left: {
                value: "d",
                left: {
                    value: "a"
                },
                right: {
                    value: "b",
                    left: {
                        value: "c"
                    }
                }
            },
            right: {
                value: "f",
                right: {
                    value: "k",
                    left: {
                        value: "e"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "a",
            left: {
                value: "b"
            },
            right: {
                value: "c"
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 1: Test 2 - Not a subtree", function () {
        const dom: DomNode = {
            value: "root",
            left: {
                value: "d",
                left: {
                    value: "a"
                },
                right: {
                    value: "b",
                    left: {
                        value: "c"
                    }
                }
            },
            right: {
                value: "f",
                right: {
                    value: "k",
                    left: {
                        value: "e"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "a",
            left: {
                value: "b",
                left: {
                    value: "c"
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 2: Test 1 - Not a subtree", function () {
        const dom: DomNode = {
            value: "root",
            left: {
                value: "d",
                left: {
                    value: "a"
                },
                right: {
                    value: "b"
                }
            },
            right: {
                value: "f"
            }
        }

        const vdom: DomNode = {
            value: "root",
            left: {
                value: "d",
                left: {
                    value: "a"
                },
                right: {
                    value: "b"
                }
            },
            right: {
                value: "f",
                right: {
                    value: "k"
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 3: Test 1 - Not a subtree", function () {
        const dom: DomNode = {
            value: "a",
            left: {
                value: "b"
            },
            right: {
                value: "c"
            }
        }

        const vdom: DomNode = {
            value: "a",
            left: {
                value: "b",
                left: {
                    value: "c"
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 4: Test 1 - Not a subtree", function () {
        const dom: DomNode = {
            value: "x",
            left: {
                value: "a",
                left: {
                    value: "c"
                }
            },
            right: {
                value: "b",
                right: {
                    value: "d"
                }
            }
        }

        const vdom: DomNode = {
            value: "x",
            left: {
                value: "a",
                left: {
                    value: "c"
                }
            },
            right: {
                value: "b",
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 4: Test 2 - Not a subtree", function () {
        const dom: DomNode = {
            value: "x",
            left: {
                value: "a",
                left: {
                    value: "c"
                }
            },
            right: {
                value: "b",
                right: {
                    value: "d"
                }
            }
        }

        const vdom: DomNode = {
            value: "x",
            left: {
                value: "a",
                left: {
                    value: "c"
                },
                right: {
                    value: "b"
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 5: Test 1 - Not a subtree", function () {
        const dom: DomNode = {
            value: "x",
            left: {
                value: "a",
                left: {
                    value: "c"
                }
            },
            right: {
                value: "b",
            }
        }

        const vdom: DomNode = {
            value: "x",
            left: {
                value: "a",
                left: {
                    value: "c"
                },
                right: {
                    value: "b"
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 6: Test 1 - Is a subtree", function () {
        const dom: DomNode = {
            value: "z",
            left: {
                value: "x",
                left: {
                    value: "a",
                    right: {
                        value: "c"
                    }

                },
                right: {
                    value: "b"
                }
            },
            right: {
                value: "e",
                right: {
                    value: "k"
                }
            }
        }

        const vdom: DomNode = {
            value: "x",
            left: {
                value: "a",
                right: {
                    value: "c"
                }

            },
            right: {
                value: "b"
            }
        }

        expect(isSubtree(dom, vdom)).to.be.true;

    });

    it("Tree 7: Test 1 - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a",
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "e",
                    right: {
                        value: "f"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "e"
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 8: Test 1 - Not a subtree", function () {
        const dom: DomNode = {
            value: "a",
            left: {
                value: "b"
            },
            right: {
                value: "c",
                left: {
                    value: "e"
                },
                right: {
                    value: "f"
                }
            }
        }

        const vdom: DomNode = {
            value: "c",
            left: {
                value: "e"
            },
            right: {
                value: "f",
                left: {
                    value: "k",
                    right: {
                        value: "l"
                    }
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });

    it("Tree 9: Test 1 - Not a subtree", function () {
        const dom: DomNode = {
            value: "a",
            left: {
                value: "c",
                left: {
                    value: "b",
                    left: {
                        value: "a"
                    },
                    right: {
                        value: "c"
                    }
                },
                right: {
                    value: "b"
                }
            },
            right: {
                value: "c",
            }
        }

        const vdom: DomNode = {
            value: "c",
            left: {
                value: "b"
            },
            right: {
                value: "d"
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;

    });



});

describe("Subtree check with empty string as node in main tree.", function () {
    it("Tree 10: Test 1 - Middle node is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "",
                    right: {
                        value: "f"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f"
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;
    });

    /*This test will only pass if leaf nodes are marked as well as empty string node*/
    it("Tree 10: Test 2 - The only Leaf is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                    right: {
                        value: ""
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f"
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;
    });

    /*This test will only pass if leaf nodes are marked as well as empty string node*/
    it("Tree 10: Test 3 - Left Leaf is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                    left: {
                        value: ""
                    },
                    right: {
                        value: "k"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f"
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;
    });

    it("Tree 10: Test 4 - Right Leaf is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                    left: {
                        value: "k"
                    },
                    right: {
                        value: ""
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f"
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;
    });


});

describe("Subtree check with empty string as node in other tree.", function () {
    it("Tree 11: Test 1 - The only leaf is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f",
                right: {
                    value: ""
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;;

    });

    it("Tree 11: Test 2 - Left leaf is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f",
                left: {
                    value: ""
                },
                right: {
                    value: "k"
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;;

    });

    it("Tree 11: Test 3 - Right leaf is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f",
                left: {
                    value: "k"
                },
                right: {
                    value: ""
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;;

    });

    it("Tree 12: Test 1 - Left leaf is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                    left: {
                        value: "k"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f",
                left: {
                    value: ""
                },
                right: {
                    value: "k"
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;;

    });

    it("Tree 12: Test 2 - Right leaf is empty string - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                    left: {
                        value: "k"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f",
                left: {
                    value: "k"
                },
                right: {
                    value: ""
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;;

    });

    it("Tree 12: Test 3 - Middle node is empty string with only right child - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                    left: {
                        value: "k"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f",
                right: {
                    value: "",
                    right: {
                        value: "k"
                    }
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;;

    });

    it("Tree 12: Test 4 - Middle node is empty string with only left child - Not a subtree", function () {
        const dom: DomNode = {
            value: "b",
            left: {
                value: "a"
            },
            right: {
                value: "d",
                left: {
                    value: "c"
                },
                right: {
                    value: "f",
                    left: {
                        value: "k"
                    }
                }
            }
        }

        const vdom: DomNode = {
            value: "d",
            left: {
                value: "c"
            },
            right: {
                value: "f",
                right: {
                    value: "",
                    right: {
                        value: "k"
                    }
                }
            }
        }

        expect(isSubtree(dom, vdom)).to.be.false;;

    });
});