const Node = require('./node.js');

module.exports = function(nodes) {
   this.nodes = nodes;   

   this.construct = connections => {
      for(let i = 0; i < connections.length; i++) {
         this.nodes[connections[i][0]].connect({
            index: connections[i][1],
            weight: connections[i][2]
         });

         this.nodes[connections[i][1]].connect({
            index: connections[i][0],
            weight: connections[i][2]
         });
      }
   }

   this.print = () => {
      for(let i = 0; i < this.nodes.length; i++) {
         console.log(`node ${i}:`);
         console.log(this.nodes[i].connected); 
      }
   }
}
