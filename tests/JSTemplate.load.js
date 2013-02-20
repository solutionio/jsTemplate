buster.testCase("loads external js code", {
    "has the load function": function () {
       var jst = new JSTemplate(); 
       assert.equals(typeof jst.load, "function");
    },
});
