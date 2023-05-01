// const stripe=require('stripe')('sk_test_51McD3uEuwvQsAvciLjuwlYbIzKOFmCz0HUfdbSwWJRbR8ssVxd8tIwufQDgwxVgjUyHQG0clbnQ1MsTZ6jYcc8fT00S2CQ3hsI')

// export const payments =async(req,res)=>{
//         const { product } = req.body; 
//         const session = await stripe.checkout.sessions.create({ 
//           payment_method_types: ["card"], 
//           line_items: [ 
//             { 
//                 price_data: { 
//                 currency: "USD", 
//                 product_data: { 
//                 name: product.name, 
//                 }, 
//                 unit_amount: product.price, 
//               }, 
//               quantity: product.quantity, 
//             }, 
//           ], 
//           mode: "payment", 
//           success_url: "http://localhost:3000/success", 
//           cancel_url: "http://localhost:3000/cancel",
//         })
//         res.status(200).send(session)
//     }
