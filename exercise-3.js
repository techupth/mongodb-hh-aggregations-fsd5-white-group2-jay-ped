db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_paid: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $match: { _id: "medium" } },
]);
