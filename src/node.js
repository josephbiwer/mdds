module.exports = function() {

	this.connected = [];
   this.fixed = false;
   this.pos = {
      x: Math.floor(Math.random() * 50),
      y: Math.floor(Math.random() * 50)
   }

	this.connect = node => {
      if(node.index === undefined || node.weight === undefined)
         throw 'weight or index not specified when adding connection to node';
		this.connected.splice(this.connected.length, 0, node);
	}
}
