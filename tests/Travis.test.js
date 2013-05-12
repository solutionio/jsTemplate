buster.testCase("My thing", {
    "has the foo and bar": function () {
       var tr = new Travis(); 
       assert.equals(tr.foo(), "bar");
    },

    "states the obvious": function () {
        assert(true);
    }
});
