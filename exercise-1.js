use practice-mongo
db.pizzaOrders.aggregate([
    { $group: { _id: "$credit_card_type" , total_paid: { $sum: "$total_price"} } }
  ])