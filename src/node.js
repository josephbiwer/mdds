module.exports = function() {

	this.connected = [];
   this.fixed = false;

	this.connect = node => {
		this.connected.splice(this.connected.length, 0, node);
	}
}
