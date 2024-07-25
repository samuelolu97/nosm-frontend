import { Metadata } from "next"
import "styles/globals.css"




import Medusa from "@medusajs/medusa-js"
import { 
  PriceListStatus, 
  PriceListType, 
} from "@medusajs/medusa"



const medusa = new Medusa({
  baseUrl: "http://localhost:9000",
  maxRetries: 1,
})
await medusa.admin.auth.getToken({
  email: "samuelolugbenga97@gmail.com",
  password: "08034241598",
})



// send authenticated requests now


let priceListId = "pl_01J3JRSS11GVT9VN0GE9SNN2DX" ;

 let variant_id = "variant_01J3DFR9QBZTZ8AM0VS5AS12HW" ;


 const priceListData = {
  name: "Summer Sale 2024",
  description: "Discounts on summer collection",
  type: "sale",
  prices: [
    {
      amount: 1000, // Price in smallest currency unit (e.g., cents for USD)
      currency_code: "usd",
      variant_id: variant_id,
      min_quantity : 20 
    },
    // Add more prices as needed
  ],
  
};

// medusa.admin.priceLists
//   .create(priceListData)
//   .then((response) => {
//     console.log("Price list created:", response.data.price_list);
//   })
//   .catch((error) => {
//     console.error("Error creating price list:", error);
//   });


  
medusa.admin.priceLists.retrieve(priceListId)
.then(({ price_list }) => {
    let prices = price_list.prices;
    // console.log(prices);
  
  console.log(price_list.prices)
})   


// medusa.admin.priceLists.update(priceListId, {
//   prices: [
//     {
//       amount: 10,
//             variant_id: "{variant_id}",
//              currency_code: "usd",
//              min_quantity:3
//     }
//   ]
// })
// .then(({ price_list }) => {
//   console.log(price_list.prices[0]);
// })



// medusa.admin.priceLists.update(priceListId, {
//   name: "New Price List",
  
  
// }
// .then(({ price_list }) => {
//   console.log(price_list.prices[0]);
// })



// medusa.admin.priceLists.create({
//   name: "New Price List",
//   description: "A new price list",
//   type: PriceListType.SALE,
//   prices: [
//     {
//       amount: 10,
//       variant_id: "{variant_id}",
//       currency_code: "usd",
//       min_quantity:3
//     }
//   ]
// })
// .then(({ price_list }) => {
//   priceListId = price_list.id ;
//   console.log(price_list.id);
// })





// medusa.admin.priceLists.update(priceListId, {
//   prices: [
//     {
//       id: 'ma_01J3G8B6WGW7V1WH9E5C7TCEB5',
//       currency_code: 'usd',
//       amount: 30,
//       min_quantity: 3,
//       max_quantity: null,
//       price_list_id: 'pl_01J3G8B6W9JB1A11Q1FQPTS5NS',
//       region_id: null,
//       variant_id: 'variant_01J3DFR8VGD6352BVP7PWFHP1V'
//     },
//     {
//       id: 'ma_01J3G8B6WHNTKKM1HQVBK8T20H',
//       currency_code: 'usd',
//       amount: 30,
//       min_quantity: 3,
//       max_quantity: null,
//       price_list_id: 'pl_01J3G8B6W9JB1A11Q1FQPTS5NS',
//       region_id: null,
//       variant_id: 'variant_01J3DFR8VJ80R4QTJ90VKHB8VP'
//     },
//     {
//       id: 'ma_01J3G8B6WH8H8SP5MDRE4D9MZS',
//       currency_code: 'usd',
//       amount: 30,
//       min_quantity: 3,
//       max_quantity: null,
//       price_list_id: 'pl_01J3G8B6W9JB1A11Q1FQPTS5NS',
//       region_id: null,
//       variant_id: 'variant_01J3DFR8VMN8ZXVS1JSYVC9CE9'
//     },
//     {
//       id: 'ma_01J3G8B6WHVM9YCJ4WRNQFM22Y',
//       currency_code: 'usd',
//       amount: 30,
//       min_quantity: 3,
//       max_quantity: null,
//       price_list_id: 'pl_01J3G8B6W9JB1A11Q1FQPTS5NS',
//       region_id: null,
//       variant_id: 'variant_01J3DFR8VVVZDP4DWMX2KBM1B8'
//     }
//   ]

// })
// .then(({ price_list }) => {
//   console.log(price_list)
// })
  

// medusa.admin.priceLists.delete(priceListId)
// .then(({ id, object, deleted }) => {
//   console.log(id);
// })



const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"


export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
