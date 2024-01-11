db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_paid: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $sort: { total_quantity: -1 } },
]);
