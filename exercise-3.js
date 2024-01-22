// **Exercise #3**

// - ให้เขียน Query กรอง Document ที่ได้จาก **Exercise #2**
//     - ให้แสดงผลแค่ข้อมูลยอดขายทั้งหมดและจำนวนของ Pizza ใน Size `medium`

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_paid: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $sort: { total_price: -1 } },
  { $match: { _id: "medium" } },
]);

//result
// {
//     _id: 'medium',
//     total_paid: 1742709.99,
//     total_quantity: 3543
//   }
