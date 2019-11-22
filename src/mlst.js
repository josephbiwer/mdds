module.exports = function(n) {
   this.network = n;

   this.verify = (index = 0, prevIndex = null) => {

      // Recursive function!
      // Depth first traversal 
      //for(let i = 0; i < this.

      /*
      let previousIndex = null;
      for(let i = 0; i < this.network.nodes.length; i++) {
         const length = this.network.nodes[i].connected.length;
         let j = 0;
         let k = 0;
         console.log(`NODE ${i}`);
         for(j; j < length; j++) {
            const childLength = this.network.nodes[j].connected.length;
            console.log(`node[${j}]:`);
            console.log(this.network.nodes[j]);
            console.log(`checking children of ${j}`);
            for(k; k < childLength; k++) {
               console.log(`this.network.nodes[${j}].connected[${k}].fixed: ${this.network.nodes[j].connected[k]}, i: ${i}`);
               const index = this.network.nodes[j].connected[k];
               console.log(`fixed: ${this.network.nodes[index].fixed}`);
               console.log(`index: ${index}, j: ${j}`);
               if(this.network.nodes[index].fixed && index !== previousIndex)
                  break;
               else
                  console.log('no match');
            }
         }

         if(k === length)
            this.network.nodes[i].fixed = true;

         previousIndex = i;
      }
      */
   }

}
