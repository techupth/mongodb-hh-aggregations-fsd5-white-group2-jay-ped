// **Exercise #5**

// - ให้เขียน Query หายอดขายทั้งหมดในแต่ละเดือนและปี
//     - โดยที่เรียงจากปีและเดือนล่าสุดไปเก่าที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      total_price_by_month: { $sum: "$total_price" },
    },
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } }, //หรือใช้ { $sort: { _id: -1 } },
]);
//result
// {
//     _id: {
//       year: 2022,
//       month: 4
//     },
//     total_price_by_month: 84701.13
//   }
//   {
//     _id: {
//       year: 2022,
//       month: 3
//     },
//     total_price_by_month: 300812
//   }
//   {
//     _id: {
//       year: 2022,
//       month: 2
//     },
//     total_price_by_month: 327283.76
//   }
//   {
//     _id: {
//       year: 2022,
//       month: 1
//     },
//     total_price_by_month: 323420.27999999997
//   }
//   {
//     _id: {
//       year: 2021,
//       month: 12
//     },
//     total_price_by_month: 376650.51
//   }...
