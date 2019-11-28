module.exports = function(graph) {
   
   this.connected = [];
   this.floating = [];

   this.g = graph;

   this.run = () => {
      const nodes = this.g.nodes; 

      for(let i = 0; i < nodes.length; i++)
         this.floating.splice(this.floating.length, 0, {
            index: i,
            pos: nodes[i].pos
         });

      this.connected.splice(0, 0, {to: this.floating[0], from: null, distance: null});
      this.floating.splice(0, 1);

      let done = false;
      while(this.floating.length > 0) {

         let connection = null;      // to, from, distance
         let floating = null;
         let connected = null;

         // Find shortest distance between all node
         for(let i = 0; i < this.floating.length; i++) {
            floating = this.floating[i];

            for(let j = 0; j < this.connected.length; j++) {
               connected = this.connected[j];
               
               const distance = Math.sqrt(
                  Math.pow(connected.to.pos.x - floating.pos.x, 2) + Math.pow(connected.to.pos.y - floating.pos.y, 2)
               ,2);

               if(!connection || distance < connection.distance)
                  connection = { 
                     from: connected.to,
                     to: floating,
                     distance
                  }
            }

         }

         this.connected.splice(this.connected.length, 0, connection);

         // Find array-index that matches with the connection.from.index
         let i = 0;
         for(i = 0; i < this.floating.length; i++)
            if(connection.to.index === this.floating[i].index)
               break;

         this.floating.splice(i, 1);

      }

      console.log("----ALGO IS DONE----");
      for(let i = 0; i < this.connected.length; i++) {
         console.log(` - this.connected[${i}]`);
         console.log(this.connected[i]);
      }
   }

}
