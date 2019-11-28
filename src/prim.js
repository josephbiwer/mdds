module.exports = function(graph) {
   
   this.connected = [];
   this.floating = [];

   this.g = graph;

   this.run = () => {
      console.log(`\n\n ------ Starting algorithm ------\n\n`);

      const nodes = this.g.nodes; 
      console.log(nodes);

      for(let i = 0; i < nodes.length; i++)
         this.floating.splice(this.floating.length, 0, {
            index: i,
            pos: nodes[i].pos
         });

      this.connected.splice(0, 0, {to: this.floating[0], from: null, distance: null});
      this.floating.splice(0, 1);

      console.log('initializing graph:');
      console.log('connected:');
      console.log(this.connected);
      console.log(this.connected[0].to.pos);
      console.log('floating:');
      console.log(this.floating);


      let done = false;
      while(this.floating.length > 0) {

         console.log(`\n\n**** FINDING NODE TO CONNECT TO NETWORK ****\n\n`);

         let connection = null;      // to, from, distance

         console.log(`this.floating.length: ${this.floating.length}`);

         console.log(`this.connected:`);
         //console.log(this.connected);

         let floating = null;
         let connected = null;

         // Find shortest distance between all node
         for(let i = 0; i < this.floating.length; i++) {
            floating = this.floating[i];
            //console.log(`this.floating[${i}]:`);
            for(let j = 0; j < this.connected.length; j++) {
               //console.log(`this.connected[${j}]:`);
               //console.log(this.connected[j]);
               connected = this.connected[j];
               console.log(`connected inside for loop:`);
               console.log(connected);
               
               const distance = Math.sqrt(
                  Math.pow(connected.to.pos.x - floating.pos.x, 2) + Math.pow(connected.to.pos.y - floating.pos.y, 2)
               ,2);

               /*
               console.log(`connected.to.index:`);
               console.log(connected.to);

               console.log(`distance: ${distance}`);
               */

               if(!connection || distance < connection.distance) {
                  //console.log(` -- shortest distance -- i: ${i}, j: ${j}`);
                  console.log(`floating.index: ${floating.index}`);
                  console.log(`connected.to.index: ${connected.to.index}`);
                  connection = { 
                     from: connected.to,
                     to: floating,
                     distance
                  }
               }
            }

         }

         this.connected.splice(this.connected.length, 0, connection);

         // Find array-index that matches with the connection.from.index
         let i = 0;
         for(i = 0; i < this.floating.length; i++) {
            console.log(`connection.from.index: ${connection.to.index}`);
            console.log(`this.floating[${i}].index: ${this.floating[i].index}`);
            if(connection.to.index === this.floating[i].index)
               break;
         }

         console.log(`splicing index -${i}- from floating array`);
         console.log('this.floating:');
         console.log(this.floating);

         this.floating.splice(i, 1);
         /*
         console.log('this.connected[0].to');
         console.log(this.connected[0].to);
         console.log('this.connected:');
         for(let i = 0; i < this.connected.length; i++) {
            console.log(` - this.connected[${i}]`);
            console.log(this.connected[i].from);
         }
         */

      }

      console.log("----ALGO IS DONE----");
      console.log('this.floating:');
      console.log(this.floating);
      console.log('this.connected:');
      for(let i = 0; i < this.connected.length; i++) {
         console.log(` - this.connected[${i}]`);
         console.log(this.connected[i]);
      }
   }

}
