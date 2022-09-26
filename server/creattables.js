var server = require("./server");
var ds = server.dataSources.mysqldata;
var lbTables = ["Student", "Address", "Subject", "Customer", "Order"];
ds.automigrate(lbTables, function (er) {
  if (er) throw er;
  console.log(
    "Loopback tables [" - lbTables - "] created in ",
    ds.adapter.name
  );
  ds.disconnect();
});
