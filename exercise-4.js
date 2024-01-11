db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { $year: "$created_at" },
      total_paid: { $sum: "$total_price" },
    },
  },
  { $sort: { total_paid: 1 } },
]);
