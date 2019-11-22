module.exports = function(nodes = []) {

   this.nodes = nodes;

   this.create = () => {
      if(this.nodes.length === 0) {
         return false;
      }

      for(let i = 0; i < this.nodes.length; i++) {

         // Check to see if each connected node is also connected to the node at this.nodes[i] (undirected graph)
         this.nodes[i].connected.forEach((ind) => {
            // Node in question: this.nodes[ind]
            const length = this.nodes[ind].connected.length;
            let j = 0;
            for(j; j < length; j++)                   // Loop through list of connected nodes
               if(this.nodes[ind].connected[j] === i) // Connected node?
                  break;                              // If so, break from the loop

            if(j === length)                          // Did the program loop through the full array and still not find a connection?
               this.nodes[ind].connect(i);
         });
      }

   }

}
