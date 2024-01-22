// **Exercise #1**

// - ให้เขียน Query หายอดเงินทั้งหมดที่จ่ายด้วยเงินสด และที่จ่ายด้วยบัตรเครดิตในแต่ละชนิด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$credit_card_type",
      total_by_payment: {
        $sum: "$total_price",
      },
    },
  },
]);

//result
// {
//     _id: null,
//     total_by_payment: 3675211.52
//   }

//   {
//     _id: 'mastercard',
//     total_by_payment: 1432896.81
//   }
