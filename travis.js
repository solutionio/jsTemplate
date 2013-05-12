
function Travis(name) {
  this.name = name;
  this.promiser = promiser();
}

Travis.prototype.status = function() {
  return this; 
};
