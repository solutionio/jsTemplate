buster.testCase("loads external js code", {
    "has the load function": function () {
       var jst = new JSTemplate(); 
       assert.equals(typeof jst.load, "function");
    },
    "can use the load function": function(done) {
      var jst = new JSTemplate();
      jst.load(function(data){
        assert(typeof google === 'object');
        done();
      });
    }
});
