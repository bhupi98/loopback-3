"use strict";

module.exports = function (Address) {
  app.get("/cust", async (req, res) => {
    // let data = Customer.app.models.find();
    // console.log("data", data);
    let connector = Customer.app.datasources.mysqldata.connector;
    let cust = Customer.find();
    //console.log("connector", connector);
    let sql = "select * from customers";
    console.log("cust", cust);
    connector.execute(sql, null, (err, data) => {
      if (err) console.log(err);
      console.log("data", data);
      res.send(data);
    });

    // let sql = "select * from customers";
    // let data = await connector.find();
    // console.log("data", data);
  });
  app.get("/cust", async (req, res) => {
    // let data = Customer.app.models.find();
    // console.log("data", data);
    let connector = Customer.app.datasources.mysqldata.connector;
    let cust = Customer.find();
    //console.log("connector", connector);
    let sql = "select * from customers";
    console.log("cust", cust);
    connector.execute(sql, null, (err, data) => {
      if (err) console.log(err);
      console.log("data", data);
      res.send(data);
    });

    // let sql = "select * from customers";
    // let data = await connector.find();
    // console.log("data", data);
  });
  app.get("/cust", async (req, res) => {
    // let data = Customer.app.models.find();
    // console.log("data", data);
    let connector = Customer.app.datasources.mysqldata.connector;
    let cust = Customer.find();
    //console.log("connector", connector);
    let sql = "select * from customers";
    console.log("cust", cust);
    connector.execute(sql, null, (err, data) => {
      if (err) console.log(err);
      console.log("data", data);
      res.send(data);
    });

    // let sql = "select * from customers";
    // let data = await connector.find();
    // console.log("data", data);
  });
};
