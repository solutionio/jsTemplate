buster.testCase("My thing", {
    "returns a object for a fluid api": function () {
       var tr = new Travis('sebs/rapidstack'); 
       assert.equals(typeof tr.status(), "object");
    },

    "states the obvious": function () {
        assert(true);
    }
});
