import { expect } from 'chai';
import { DomNode, isSubtree, containsTree } from '../src/narySubtreeCheck';

describe("N-ary Subtree check using string computation", () => {
    it("3-ary Tree 1: Test 1 - Is a subtree", () => {
        const naryT1: DomNode = {
            val: "a",
            children: [{ val: "b" },
            {
                val: "c",
                children: [{ val: "e" },
                { val: "f" }
                ]
            }, {
                val: "d",
                children: [{ val: "g" }
                ]
            }
            ]
        }

        const naryT2: DomNode = {
            val: "c",
            children: [{ val: "e" },
            { val: "f", }
            ]
        }

        expect(isSubtree(naryT1, naryT2, 3)).to.equal(true);
    });

    it("4-ary Tree 1: Test 1 - Is a subtree ", () => {
        const naryT1: DomNode = {
            val: "a",
            children: [{
                val: "c",
                children: [{ val: "k" },
                {
                    val: "m",
                    children: [{ val: "s" }]
                }
                ]
            }, {
                val: "d",
                children: [{ val: "r" }, { val: "h" },
                {
                    val: "e",
                    children: [{ val: "b" }, { val: "s" }
                    ]
                }
                ]
            }, {
                val: "k"
            }, {
                val: "g",
                children: [{ val: "d" }, { val: "r" }, {
                    val: "t", children: [{ val: "r" }, { val: "w" }, { val: "d" }
                    ]
                }
                ]
            }
            ]
        }

        const naryT2: DomNode = {
            val: "e",
            children: [{ val: "b" }, { val: "s" }
            ]
        }

        expect(isSubtree(naryT1, naryT2, 4)).to.equal(true);
    });

    it("4-ary Tree 1: Test 2 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "a",
            children: [{
                val: "c",
                children: [{ val: "k" },
                {
                    val: "m",
                    children: [{ val: "s" }]
                }
                ]
            }, {
                val: "d",
                children: [{ val: "r" }, { val: "h" },
                {
                    val: "e",
                    children: [{ val: "b" }, { val: "s" }
                    ]
                }
                ]
            }, {
                val: "k"
            }, {
                val: "g",
                children: [{ val: "d" }, { val: "r" }, {
                    val: "t", children: [{ val: "r" }, { val: "w" }, { val: "d" }
                    ]
                }
                ]
            }
            ]
        }

        const naryT2: DomNode = {
            val: "d",
            children: [{ val: "r" }, { val: "h" }, { val: "e" }]
        }

        expect(isSubtree(naryT1, naryT2, 4)).to.equal(false);
    });

    it("4-ary Tree 2: Test 1 - Is a subtree", () => {
        const naryT1: DomNode = {
            val: "root",
            children: [{
                val: "k",
                children: [{ val: "s" },
                {
                    val: "r",
                    children: [{ val: "n" }, { val: "m" }]
                },
                { val: "t" }
                ]
            },
            {
                val: "g",
                children: [{ val: "q" }, { val: "a" },
                {
                    val: "z",
                    children: [{ val: "d" }, { val: "a" },
                    {
                        val: "k",
                        children: [
                            {
                                val: "t",
                                children: [{ val: "e" }, { val: "w" }, { val: "y" }, { val: "k" }
                                ]
                            },
                            { val: "w" }
                        ]
                    }
                    ]
                }]
            },
            {
                val: "p",
                children: [{ val: "z" }, { val: "y" }, { val: "u" }]
            }]
        }

        const naryT2: DomNode = {
            val: "k",
            children: [
                {
                    val: "t",
                    children: [{ val: "e" }, { val: "w" }, { val: "y" }, { val: "k" }
                    ]
                },
                { val: "w" }
            ]
        }

        expect(isSubtree(naryT1, naryT2, 4)).to.equal(true);
    });

    it("4-ary Tree 2: Test 2 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "root",
            children: [{
                val: "k",
                children: [{ val: "s" },
                {
                    val: "r",
                    children: [{ val: "n" }, { val: "m" }]
                },
                { val: "t" }
                ]
            },
            {
                val: "g",
                children: [{ val: "q" }, { val: "a" },
                {
                    val: "z",
                    children: [{ val: "d" }, { val: "a" },
                    {
                        val: "k",
                        children: [
                            {
                                val: "t",
                                children: [{ val: "e" }, { val: "w" }, { val: "y" }, { val: "k" }
                                ]
                            },
                            { val: "w" }
                        ]
                    }
                    ]
                }]
            },
            {
                val: "p",
                children: [{ val: "z" }, { val: "y" }, { val: "u" }]
            }]
        }

        const naryT2: DomNode = {
            val: "root",
            children: [{
                val: "k",
                children: [{ val: "s" },
                {
                    val: "r",
                    children: [{ val: "n" }, { val: "m" }]
                },
                { val: "t" }
                ]
            },
            {
                val: "g",
                children: [{ val: "q" }, { val: "a" }]
            },
            ]
        }

        expect(isSubtree(naryT1, naryT2, 4)).to.equal(false);
    });

    it("5-ary Tree 1: Test 1 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "p",
            children: [
                {
                    val: "e",
                    children: [{ val: "t" }, { val: "u" }, { val: "c" }, { val: "q" }, { val: "h" }]
                }, {
                    val: "t",
                    children: [{ val: "o" }, { val: "u" }, { val: "e" }, { val: "a" }, { val: "i" }]
                }, { val: "v" }, { val: "k" }, { val: "j" }
            ]

        }
        const naryT2: DomNode = {
            val: "t",
            children: [{ val: "o" }, { val: "u" }, { val: "e" }, { val: "a" }, { val: "i" }]
        }

        expect(isSubtree(naryT1, naryT2, 5)).to.equal(true);
    });

    it("5-ary Tree 1: Test 2 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "p",
            children: [
                {
                    val: "e",
                    children: [{ val: "t" }, { val: "u" }, { val: "c" }, { val: "q" }, { val: "h" }]
                }, {
                    val: "t",
                    children: [{ val: "o" }, { val: "u" }, { val: "e" }, { val: "a" }, { val: "i" }]
                }, { val: "v" }, { val: "k" }, { val: "j" }
            ]

        }
        const naryT2: DomNode = {
            val: "t",
            children: [{ val: "o" }, { val: "u" }, { val: "r" }, { val: "q" }, { val: "x" }]
        }

        expect(isSubtree(naryT1, naryT2, 5)).to.equal(false);
    });

    it("6-ary Tree 1: Test 1 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "a",
            children: [
                { val: "b", 
                children: [
                    {val: "h", 
                    children: [{val: "n"}, {val: "o"}]}, 
                    {val: "i"}, {val: "j"}
                ]}, { val: "c" }, { val: "d" }, 
                    { val: "e", 
                    children: [
                        {val: "k", 
                        children: [{val: "p"}]}, 
                        {val: "l", 
                        children: [{val:"q"}]
                        }
                    ]}, 
                    { val: "f" }, 
                    { val: "g", 
                    children: [{val: "m"}] 
                    }
            ]   
        }
        const naryT2: DomNode = { val: "b", 
        children: [
            {val: "h", 
            children: [{val: "n"}, {val: "o"}]}, 
            {val: "i"}
        ]}

        expect(isSubtree(naryT1, naryT2, 6)).to.equal(false)
    });
});

describe("N-ary subtree check using findRootNMatchTree approach", () => {
    it("3-ary Tree 1: Test 1 - Is a subtree", () => {
        const naryT1: DomNode = {
            val: "a",
            children: [{ val: "b" },
            {
                val: "c",
                children: [{ val: "e" },
                { val: "f" }
                ]
            }, {
                val: "d",
                children: [{ val: "g" }
                ]
            }
            ]
        }

        const naryT2: DomNode = {
            val: "c",
            children: [{ val: "e" },
            { val: "f", }
            ]
        }

        expect(containsTree(naryT1, naryT2)).to.equal(true);
    });

    it("4-ary Tree 1: Test 1 - Is a subtree ", () => {
        const naryT1: DomNode = {
            val: "a",
            children: [{
                val: "c",
                children: [{ val: "k" },
                {
                    val: "m",
                    children: [{ val: "s" }]
                }
                ]
            }, {
                val: "d",
                children: [{ val: "r" }, { val: "h" },
                {
                    val: "e",
                    children: [{ val: "b" }, { val: "s" }
                    ]
                }
                ]
            }, {
                val: "k"
            }, {
                val: "g",
                children: [{ val: "d" }, { val: "r" }, {
                    val: "t", children: [{ val: "r" }, { val: "w" }, { val: "d" }
                    ]
                }
                ]
            }
            ]
        }

        const naryT2: DomNode = {
            val: "e",
            children: [{ val: "b" }, { val: "s" }
            ]
        }

        expect(containsTree(naryT1, naryT2)).to.equal(true);
    });

    it("4-ary Tree 1: Test 2 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "a",
            children: [{
                val: "c",
                children: [{ val: "k" },
                {
                    val: "m",
                    children: [{ val: "s" }]
                }
                ]
            }, {
                val: "d",
                children: [{ val: "r" }, { val: "h" },
                {
                    val: "e",
                    children: [{ val: "b" }, { val: "s" }
                    ]
                }
                ]
            }, {
                val: "k"
            }, {
                val: "g",
                children: [{ val: "d" }, { val: "r" }, {
                    val: "t", children: [{ val: "r" }, { val: "w" }, { val: "d" }
                    ]
                }
                ]
            }
            ]
        }

        const naryT2: DomNode = {
            val: "d",
            children: [{ val: "r" }, { val: "h" }, { val: "e" }]
        }

        expect(containsTree(naryT1, naryT2)).to.equal(false);
    });

    it("4-ary Tree 2: Test 1 - Is a subtree", () => {
        const naryT1: DomNode = {
            val: "root",
            children: [{
                val: "k",
                children: [{ val: "s" },
                {
                    val: "r",
                    children: [{ val: "n" }, { val: "m" }]
                },
                { val: "t" }
                ]
            },
            {
                val: "g",
                children: [{ val: "q" }, { val: "a" },
                {
                    val: "z",
                    children: [{ val: "d" }, { val: "a" },
                    {
                        val: "k",
                        children: [
                            {
                                val: "t",
                                children: [{ val: "e" }, { val: "w" }, { val: "y" }, { val: "k" }
                                ]
                            },
                            { val: "w" }
                        ]
                    }
                    ]
                }]
            },
            {
                val: "p",
                children: [{ val: "z" }, { val: "y" }, { val: "u" }]
            }]
        }

        const naryT2: DomNode = {
            val: "k",
            children: [
                {
                    val: "t",
                    children: [{ val: "e" }, { val: "w" }, { val: "y" }, { val: "k" }
                    ]
                },
                { val: "w" }
            ]
        }

        expect(containsTree(naryT1, naryT2)).to.equal(true);
    });

    it("4-ary Tree 2: Test 2 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "root",
            children: [{
                val: "k",
                children: [{ val: "s" },
                {
                    val: "r",
                    children: [{ val: "n" }, { val: "m" }]
                },
                { val: "t" }
                ]
            },
            {
                val: "g",
                children: [{ val: "q" }, { val: "a" },
                {
                    val: "z",
                    children: [{ val: "d" }, { val: "a" },
                    {
                        val: "k",
                        children: [
                            {
                                val: "t",
                                children: [{ val: "e" }, { val: "w" }, { val: "y" }, { val: "k" }
                                ]
                            },
                            { val: "w" }
                        ]
                    }
                    ]
                }]
            },
            {
                val: "p",
                children: [{ val: "z" }, { val: "y" }, { val: "u" }]
            }]
        }

        const naryT2: DomNode = {
            val: "root",
            children: [{
                val: "k",
                children: [{ val: "s" },
                {
                    val: "r",
                    children: [{ val: "n" }, { val: "m" }]
                },
                { val: "t" }
                ]
            },
            {
                val: "g",
                children: [{ val: "q" }, { val: "a" }]
            },
            ]
        }

        expect(containsTree(naryT1, naryT2)).to.equal(false);
    });

    it("5-ary Tree 1: Test 1 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "p",
            children: [
                {
                    val: "e",
                    children: [{ val: "t" }, { val: "u" }, { val: "c" }, { val: "q" }, { val: "h" }]
                }, {
                    val: "t",
                    children: [{ val: "o" }, { val: "u" }, { val: "e" }, { val: "a" }, { val: "i" }]
                }, { val: "v" }, { val: "k" }, { val: "j" }
            ]

        }
        const naryT2: DomNode = {
            val: "t",
            children: [{ val: "o" }, { val: "u" }, { val: "e" }, { val: "a" }, { val: "i" }]
        }

        expect(containsTree(naryT1, naryT2)).to.equal(true);
    });

    it("5-ary Tree 1: Test 2 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "p",
            children: [
                {
                    val: "e",
                    children: [{ val: "t" }, { val: "u" }, { val: "c" }, { val: "q" }, { val: "h" }]
                }, {
                    val: "t",
                    children: [{ val: "o" }, { val: "u" }, { val: "e" }, { val: "a" }, { val: "i" }]
                }, { val: "v" }, { val: "k" }, { val: "j" }
            ]

        }
        const naryT2: DomNode = {
            val: "t",
            children: [{ val: "o" }, { val: "u" }, { val: "r" }, { val: "q" }, { val: "x" }]
        }

        expect(containsTree(naryT1, naryT2)).to.equal(false);
    });

    it("6-ary Tree 1: Test 1 - Not a subtree", () => {
        const naryT1: DomNode = {
            val: "a",
            children: [
                { val: "b", 
                children: [
                    {val: "h", 
                    children: [{val: "n"}, {val: "o"}]}, 
                    {val: "i"}, {val: "j"}
                ]}, { val: "c" }, { val: "d" }, 
                    { val: "e", 
                    children: [
                        {val: "k", 
                        children: [{val: "p"}]}, 
                        {val: "l", 
                        children: [{val:"q"}]
                        }
                    ]}, 
                    { val: "f" }, 
                    { val: "g", 
                    children: [{val: "m"}] 
                    }
            ]   
        }
        const naryT2: DomNode = { val: "b", 
        children: [
            {val: "h", 
            children: [{val: "n"}, {val: "o"}]}, 
            {val: "i"}
        ]}

        expect(containsTree(naryT1, naryT2)).to.equal(false)
    });
});