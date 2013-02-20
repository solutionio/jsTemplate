JSTemplate.prototype.load = function(cb) {
  asyncLoad('http://maps.googleapis.com/maps/api/js?sensor=true', cb); 
};
