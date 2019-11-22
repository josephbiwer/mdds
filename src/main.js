const Node = require('./node.js');					// Individual node
const Network = require('./network.js');        // Network
const MLST = require('./mlst.js');              // Max Leaf Spanning Tree

console.log('running Minimum Connected Dominating Set algorithm');

const numNodes = parseInt(process.argv.splice(2));

// If number of nodes is not specified
if(!numNodes || numNodes <= 0)
   throw 'Please specify number of nodes';


// Creating nodes for the algorithm
const nodes = [];
for(let i = 0; i < numNodes; i++)
   nodes.splice(nodes.length, 0, new Node());

// Creating test network
nodes[0].connect(1);
nodes[1].connect(2);
//nodes[1].connect(3);
nodes[1].connect(4);
nodes[1].connect(5);
nodes[1].connect(6);
nodes[2].connect(3);
nodes[3].connect(4);
nodes[3].connect(5);
nodes[5].connect(6);

// Initializing network with nodes
const network = new Network(nodes);

// If the creating of the network failed
if(network.create() === false) {
   throw 'Specify nodes in the network'; 
}

console.log('Network successfully initialized');

for(let i = 0; i < network.nodes.length; i++)
   console.log(network.nodes[i].connected);

// Interfacing with Maximum Leaf Spanning Tree
const mlst = new MLST(network);
mlst.verify();

console.log('after verifying network');
for(let i = 0; i < mlst.network.nodes.length; i++)
   console.log(mlst.network.nodes[i]);
