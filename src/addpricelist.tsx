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
  email: "your medusa admin email",
  password: "your medusa admin password",
})


// send authenticated requests now

let variant_id = "id for the variant of the product you want to add the pricelist to" ;

//check you product in the admin dashboard,you will see raw data,copy the variantid of the variant you want to add

const priceListData = {
  name: "name of the pricelist",
  description: "Discription of the pricelist",
  type: "sale",
  prices: [
    {
      amount: 1000, // Price in smallest currency unit (e.g., cents for USD)
      currency_code: "usd",
      variant_id: variant_id, //variant_id gotten as explaind from above 
      min_quantity : 20    // the minimum quantity you want the prices to get applied ,you can set max quantity too ,using (max_quantity)
    },
    // Add more prices as needed
  ],
  
};


medusa.admin.priceLists
  .create(priceListData)
  .then((response) => {
    console.log("Price list created:", response.data.price_list);
  })
  .catch((error) => {
    console.error("Error creating price list:", error);
  });

  // running this file will create a pricelist for a particular varaint you chose,you can create multiple prices for different variant at the same time

  //after this go to your admin page ,go to pricing then price list and activate the recently created pricelist 

  //we are using api method because medusa has not update the ui to set the max and min quantity