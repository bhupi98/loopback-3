"use strict";
const app = require("../../server/server");
module.exports = function (Customer) {
  Customer.observe("before save", (ctx, next) => {
    console.log(ctx.instance);

    if (ctx.instance.orders.length) {
      let orders = [];
      for (let i = 0; i < ctx.instance.orders.length; i++) {
        let order = {};
        order.orderId = ctx.instance.orders[i].orderId;
        order.productName = ctx.instance.orders[i].productName;
        order.productType = ctx.instance.orders[i].productType;
        order.productId = ctx.instance.orders[i].productId;
        orders.push(order);
      }
      console.log("roders", orders);
      //console.log(Customer.app.models);
      Customer.app.models.Order.create(orders, function (err, response) {
        if (err) console.log(err);
        console.log("response", response);
      });
    }
    next();
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
