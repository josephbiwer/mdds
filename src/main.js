// Implementation of Prim's algorithm
const Node = require('./node.js');
const Graph = require('./graph.js');
const Prim = require('./prim.js');

const nodeCount = 5;
const nodes = [];


console.log(' ----- Creating Network ----- ');

// Creating nodes in graph
for(let i = 0; i < nodeCount; i++)
   nodes.splice(nodes.length, 0, new Node());

const connections = [
   [0, 1, 4],
   [1,2,8],
   [2,3,7],
   [3,4,9],
   [4,5,10],
   [5,6,2],
   [6,7,1],
   [7,0,8],
   [7,8,7],
   [7,1,11],
   [8,6,6],
   [8,2,2],
   [2,5,4],
   [5,3,14]
];

const g = new Graph(nodes);
//g.construct(connections);

console.log(' ----- Creating Network ----- ');

g.print();

const prim = new Prim(g);

prim.run();
