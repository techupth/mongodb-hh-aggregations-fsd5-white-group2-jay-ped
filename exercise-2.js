// **Exercise #2**

// - ให้เขียน Query โดยมีรายละเอียดดังนี้
// - หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size
// - โดยที่ให้เรียงผลลัพธ์ตามยอดขายที่มากที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_amount: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  { $sort: { total_price: -1 } },
]);

//result>>>>>>>>>
//   {
//     _id: 'small',
//     total_amount: 1750316.41,
//     total_quantity: 3468
//   }
//   {
//     _id: 'medium',
//     total_amount: 1742709.99,
//     total_quantity: 3543
//   }
//   {
//     _id: 'large',
//     total_amount: 1615081.93,
//     total_quantity: 3448
//   }
