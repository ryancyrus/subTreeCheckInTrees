import { expect } from 'chai';
import { DomNode } from '../src/binarySubtreeCheck';
import { isSubtree} from '../src/binarySubtreeCheck';

describe('Check subtree using Preorder traversal with termination markup', () => {
    it("Original Test - Is a subtree", () => {
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
        expect(isSubtree(dom, vdom)).to.equal(true);
    });

    it("Tree 1: Test 1 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 1: Test 2 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 2: Test 1 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 3: Test 1 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 4: Test 1 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 4: Test 2 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 5: Test 1 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 6: Test 1 - Is a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(true)

    });

    it("Tree 7: Test 1 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 8: Test 1 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });

    it("Tree 9: Test 1 - Not a subtree", () =>{
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

        expect(isSubtree(dom, vdom)).to.equal(false)

    });



});